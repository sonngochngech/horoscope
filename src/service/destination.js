import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { locationQuery } from '../data/queryGPT.js';
import { mo_ta_tinh, ten_tinh } from '../data/key.js';
import { position } from '../data/location.js';
import { JsonLoader } from '@llm-tools/embedjs';
import { city_array } from '../data/citi_array.js';
import { createCompletion } from './gpt/createCompletion.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

export async function destination(thanhpho, hythan, my_menh) {
    try {

        const menh = hythan.charAt(0).toUpperCase() + hythan.slice(1);
        const city = city_array[parseInt(thanhpho) - 1];
        const new_city = {
            name: city.name,
            "Dụng_Hỷ_Thần": {
                [menh]: city["Dụng_Hỷ_Thần"][menh]
            }
        }
        const query = `Bạn trả lời tôi với cương vị là một nhà văn. Tôi sinh ở  ${new_city.name}, Dụng - Hỷ Thần của tôi là ${hythan}. Từ Bảng 2: Các tỉnh trong nước di chuyển tới tốt theo Dụng - Hỷ Thần xin vui lòng liệt kê đúng 3 tỉnh mà tôi có thể di chuyển tới tốt, mỗi tỉnh phải được viết đầy đủ tên với dấu và được tách biệt bằng dấu phẩy, không có chữ tỉnh trước tên các tỉnh. Kết quả trả về được dùng để hoàn thành câu sau: 
        A.Theo kiến thức Phong Thủy Bát Tự, bạn thuộc mệnh ${my_menh}, khuyết ${hythan}, về điểm mạnh [học thuật]. Tuy nhiên lại [học thuật].
        B.Để cân bằng mệnh cách và bổ sung nhiều may mắn & niềm vui, bạn nên đi về hướng [học thuật], tới các địa điểm [học thuật]. Bởi vì/ lý do [học thuật] 
        C.Tên các tỉnh: tỉnh 1, tỉnh 2, tỉnh 3
        D.Mô tả các tỉnh: 1. tỉnh 1...
                        2. tỉnh 2...
                        3. tỉnh 3...
        ${locationQuery}
        `;
        let maxRetries = 5; // Maximum number of retry attempts
        let attempt = 0;
        let queryRes;
        while (attempt < maxRetries) {
            try {
                let response = (await createCompletion('Kiến thức:' + JSON.stringify(new_city) + query));
                // console.log(response);
                queryRes = extractAndConvertToJSON(response.content);
                break;
            } catch (error) {
                attempt++;
                console.error(`Attempt ${attempt} failed:`, error);
                if (attempt >= maxRetries) {
                    console.error('Max retries reached. Handling error.');

                    throw new Error(error.message || " Undefined message");
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
// export function extractAndParseJSON(text) {
//     try {

//         const jsonMatch = text.match(/{[\s\S]*}/);
//         // Kiểm tra xem có khớp nào không
//         if (jsonMatch) {
//             const jsonString = jsonMatch[0];

//             // Xóa bỏ các ký tự không cần thiết như \n' +\n và chuyển đổi thành JSON
//             const cleanedJsonString = jsonString
//                 .replace(/\\n/g, '')    // Loại bỏ các ký tự xuống dòng
//                 .replace(/\\'/g, "'")   // Thay thế \\' bằng '
//                 .replace(/'/g, '"')
//                 .replace(/,\s*([}\]])/g, '$1');    // Thay thế ' bằng "
//             // Chuyển đổi thành đối tượng JSON
//             const jsonObject = JSON.parse(cleanedJsonString);
//             return jsonObject;
//         } else {
//             console.log("Không tìm thấy chuỗi JSON trong văn bản.");
//             return null;
//         }
//     } catch (error) {
//         console.error('An error occurred:', error); // Log the error for debugging
//         throw new Error(error.message || 'An unexpected error occurred');

//     }
//     // Biểu thức chính quy để trích xuất nội dung giữa { và }

// }
function extractAndConvertToJSON(inputString) {
    try {
        // Regular expression to match JSON object enclosed in {}
        const jsonMatch = inputString.match(/\{[^]*\}/);

        if (jsonMatch) {
            const jsonString = jsonMatch[0]; // The first match (the JSON string)

            try {
                // Parse the JSON string into an object
                const jsonObject = JSON.parse(jsonString);
                return jsonObject;
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null; // Return null or handle the error as needed
            }
        } else {
            console.error("No valid JSON found in the string.");
            return null; // Return null or handle the case when JSON is not found
        }
    } catch (error) {
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');

    }
}
export function getPositionNumber(hy_tan) {
    try {
        let letters = position[hy_tan]["letters"];
        let numbers = position[hy_tan]["numbers"];

        return ['1' + numbers[0] + letters[0], '1' + numbers[1] + letters[0], '2' + numbers[0] + letters[0]];

    } catch (error) {
        console.error('An error occurred:', error); // Log the error for debugging
        throw new Error(error.message || 'An unexpected error occurred');

    }



}


