import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { locationQuery } from '../data/queryGPT.js';
import { mo_ta_tinh, ten_tinh } from '../data/key.js';
import { position } from '../data/location.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

export async function destination(thanhpho, hythan, ragApp) {
    try {
        const query = `Bạn trả lời tôi với cương vị là một nhà văn. Tôi sinh ở  ${thanhpho}, Dụng - Hỷ Thần của tôi là ${hythan}. Từ Bảng 2: Các tỉnh trong nước di chuyển tới tốt theo Dụng - Hỷ Thần xin vui lòng liệt kê đúng 3 tỉnh mà tôi có thể di chuyển tới tốt, mỗi tỉnh phải được viết đầy đủ tên với dấu và được tách biệt bằng dấu phẩy, không có chữ tỉnh trước tên các tỉnh. Kết quả trả về được dùng để hoàn thành câu sau: 
    A.Theo kiến thức Phong Thủy Bát Tự, bạn thuộc mệnh ${thanhpho}, khuyết ${hythan}, có điểm mạnh [học thuật]. Tuy nhiên lại [học thuật].
    B.Để cân bằng mệnh cách và bổ sung nhiều may mắn & niềm vui, bạn nên đi về hướng [học thuật], tới các địa điểm [học thuật]. Bởi vì/ lý do [học thuật] 
    C.Tên các tỉnh: tỉnh 1, tỉnh 2, tỉnh 3
    D.Mô tả các tỉnh: 1. tỉnh 1...
                    2. tỉnh 2...
                    3. tỉnh 3...
    ${locationQuery}
    `;
        let maxRetries = 3; // Maximum number of retry attempts
        let attempt = 0;
        let queryRes;
        while (attempt < maxRetries) {
            try {
                queryRes = extractAndParseJSON((await ragApp.query(query)).content);
                break; // Exit the loop if successful
            } catch (error) {
                attempt++;
                console.error(`Attempt ${attempt} failed:`, error);
                if (attempt >= maxRetries) {
                    console.error('Max retries reached. Handling error.');
                    // Handle the error after all retries have failed
                    throw new Error(error.message ||" Undefined message");
                }
            }
        }


        let provinces = queryRes[ten_tinh];
        let provincesDescriptions = queryRes[mo_ta_tinh];
        const cities = getCities(provinces, provincesDescriptions);

        return [cities, queryRes];

    } catch (error) {
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');
    }

}

function getCities(provinceNames, provincesDescriptions) {
    try {
        const jsonFilePath = path.join(__dirname, '../data/image.json');
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

        const result = {};

        provinceNames.forEach((province, index) => {
            if (jsonData[province]) {
                result[province] = {
                    image: jsonData[province].map(image => image.path),
                    description: provincesDescriptions[index]
                };
            } else {
                 throw new Error(error.message || 'An unexpected error occurred');
            }
        });

        return result;

    } catch (error) {
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');
    }

}

// Sample text


// Function to extract data
function extractAndParseJSON(text) {
    try {
        
        const jsonMatch = text.match(/{[\s\S]*}/);
        // Kiểm tra xem có khớp nào không
        if (jsonMatch) {
            const jsonString = jsonMatch[0];

            // Xóa bỏ các ký tự không cần thiết như \n' +\n và chuyển đổi thành JSON
            const cleanedJsonString = jsonString
                .replace(/\\n/g, '')    // Loại bỏ các ký tự xuống dòng
                .replace(/\\'/g, "'")   // Thay thế \\' bằng '
                .replace(/'/g, '"');    // Thay thế ' bằng "
            // Chuyển đổi thành đối tượng JSON
            const jsonObject = JSON.parse(cleanedJsonString);
            return jsonObject;
        } else {
            console.log("Không tìm thấy chuỗi JSON trong văn bản.");
            return null;
        }
    } catch (error) {
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');

    }
    // Biểu thức chính quy để trích xuất nội dung giữa { và }

}

export function getPositionNumber(hy_tan) {
    try{
        let letters = position[hy_tan]["letters"];
        let numbers = position[hy_tan]["numbers"];

        return ['1' + numbers[0] + letters[0], '1' + numbers[1] + letters[0], '2' + numbers[0] + letters[0]];

    }catch(error){
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');

    }

    

}


