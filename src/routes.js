import express from "express";
import { calculate } from "./service/hy_than.js";
import { destination, getPositionNumber } from "./service/destination.js";
import { cai_thien, dia_diem, diem_manh, huong, ly_do } from "./data/key.js";
const router=express.Router();


let ragApp;

export const setRagApp = (app) => {
  ragApp = app;
};


router.get("/",async(req,res)=>{
     return res.status(200).send({
        "hello":"hello world"
     })
});

router.get("/landingPage",async(req,res)=>{
    res.render('index');
})



router.get("/information",async(req,res)=>{
    // const [name,birthdate,hour,minute,sex,city]=["Nguyễn Mai Phương","17/09/2003",15,30,"male","Hải Phòng"];
    // let  customer={
    //     name: name,
    //     birthdate: birthdate,
    //     location: city
    // }
    // const [menh,dungHythan]=await calculate(birthdate,hour,minute,sex);
    // const [cities,gptRes]=await destination(city,dungHythan,ragApp);
    // customer["mệnh"]=menh;
    // customer["dụng-hỷ thần"]=dungHythan;
    // customer[diem_manh]=gptRes[diem_manh];
    // customer[cai_thien]=gptRes[cai_thien];
    // customer[huong]=gptRes[huong];
    // customer[dia_diem]=gptRes[dia_diem];
    // customer[ly_do]=gptRes[ly_do];



    let cities={
        'Vĩnh Phúc': {
          image: [
            '/public/images/cities/vphuc1.jpg',
            '/public/images/cities/vphuc2.webp',
            '/public/images/cities/vphuc3.jpg',
            '/public/images/cities/vphuc4.jpg',
            '/public/images/cities/vphuc5.jpg'
          ],
          description: 'Vĩnh Phúc là một vùng đất sôi động với nền công nghiệp phát triển và các khu công nghiệp lớn như Khu công nghiệp Khai Quang, nơi đây được bao phủ bởi không khí nhộn nhịp của một đô thị hiện đại.'
        },
        'Hà Nội': {
          image: [
            '/public/images/cities/hnoi1.jpg',
            '/public/images/cities/hnoi2.jpg',
            '/public/images/cities/hn oi3.jpg',
            '/public/images/cities/hnoi4.jpg',
            '/public/images/cities/hnoi5.png'
          ],
          description: 'Hà Nội, thủ đô nghìn năm văn hiến, không chỉ nổi bật với những giá trị văn hóa lịch sử phong phú mà còn phát triển mạnh mẽ về công nghiệp và thương mại, tạo nên môi trường lý tưởng để bạn phát huy năng lượng Kim.'
        },
        'Hưng Yên': {
          image: [
            '/public/images/cities/hyen1.jpg',
            '/public/images/cities/hyen2.jpg',
            '/public/images/cities/hyen3.jpg',
            '/public/images/cities/hyen4.jpg',
            '/public/images/cities/hyen5.jpg'
          ],
          description: 'Hưng Yên, một địa điểm nổi tiếng với sự phát triển của các khu công nghiệp và đô thị vệ tinh, giúp bạn tận hưởng không gian hiện đại và môi trường năng động, đáp ứng tốt những yếu tố cần thiết để bổ sung năng lượng Kim.'
        }
    }
    let customer={
        name: 'Nguyễn Mai Phương',
        birthdate: '17/09/2003',
        location: 'Hải Phòng',
        'mệnh': 'mộc',
        'dụng-hỷ thần': 'kim',
        'Điểm mạnh': 'quyết đoán, kiên định',
        'Cải thiện': 'cân bằng sự mềm mỏng và dễ linh hoạt hơn trong các tình huống',
        'Hướng': 'Tây Bắc',
        'Đặc trưng của địa điểm': 'liên quan tới kim loại, khu công nghiệp, đô thị hiện đại',
        'Lý do': 'Những nơi có kim loại, khu công nghiệp, và đô thị hiện đại sẽ giúp bạn tăng cường năng lượng Kim trong mệnh, từ đó tạo ra sự thịnh vượng và thành công dài lâu.'
      }

    let chairList=getPositionNumber("mộc");




    res.render('page2',
        {
            customer,
            cities,
            chairList
        }
    )
});

export default router;