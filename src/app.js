import express from "express";
import { PdfLoader, RAGApplicationBuilder, SIMPLE_MODELS } from "@llm-tools/embedjs"
import { LmdbCache } from "@llm-tools/embedjs/cache/lmdb";
import { LanceDb } from "@llm-tools/embedjs/vectorDb/lance"
import path from 'path'
import bodyParser from 'body-parser';
import router from "./routes.js";
import { setRagApp } from "./routes.js";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
const port=3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public',express.static(path.join(__dirname, 'public')));

const ragApp=await new  RAGApplicationBuilder()
                .setTemperature(0.5)
                .setModel(SIMPLE_MODELS["OPENAI_GPT4_O"])
                .setVectorDb(new LanceDb({path: path.resolve('./src/RAG/db')}))
                .addLoader(new PdfLoader({filePathOrUrl: path.resolve('./src/RAG/data/1.pdf')}))
                .setCache(new LmdbCache({ path: path.resolve('./src/RAG/cache') }))
                .build();

// console.log(await ragApp.query("Tôi sinh ở Tỉnh An Giang, Dụng - Hỷ Thần của tôi là Mộc, các tỉnh di chuyển tới tốt của tôi là gì, chỉ chọn 3 tỉnh bất kì, kết quả trả về theo format [tỉnh 1, tỉnh 2, tỉnh 3]") );

import fs from 'fs';

async function destination(thanhpho, hythan){
    const query = `Tôi sinh ở ${thanhpho}, Dụng - Hỷ Thần của tôi là ${hythan}. Xin vui lòng liệt kê 3 tỉnh mà tôi có thể di chuyển tới tốt, mỗi tỉnh phải được viết đầy đủ tên với dấu và được tách biệt bằng dấu phẩy, không có chữ tỉnh trước tên các tỉnh. Kết quả trả về theo định dạng sau: [tỉnh 1, tỉnh 2, tỉnh 3]`;
    const queryRes = await ragApp.query(query);
    console.log(queryRes.content);

    let provinces = [];
    try {
        const validJsonString = queryRes.content
            .replace(/^\[|\]$/g, '')          // Xóa dấu ngoặc vuông
            .split(',')                      // Tách các phần tử
            .map(s => s.trim())              // Xóa khoảng trắng
            .map(s => `"${s}"`)              // Thêm dấu ngoặc kép quanh các phần tử
            .join(',');                      // Nối các phần tử lại thành chuỗi JSON

        provinces = JSON.parse(`[${validJsonString}]`);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return { error: 'Invalid JSON format in query response' };
    }
    console.log(provinces);

    const imagePaths = getImagePaths(provinces);
    console.log(imagePaths);
    return imagePaths;
}

function getImagePaths(provinceNames) {
    const jsonFilePath = path.join(__dirname, 'public/image.json');
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    const result = {};

    provinceNames.forEach(province => {
        if (jsonData[province]) {
            result[province] = jsonData[province].map(image => image.path);
        } else {
            result[province] = 'No images found for this province';
        }
    });

    return result;
}

destination("An Giang", "Mộc")


// setRagApp(ragApp);

// app.use("",router);

// app.listen(port, () => {
//     console.log(`Server running on port  3000`);
//   });

  
// export default app;
