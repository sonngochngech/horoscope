import express from "express";
import { calculate } from "./service/hy_than.js";
import { destination, getPositionNumber } from "./service/destination.js";
import { cai_thien, dia_diem, diem_manh, huong, ly_do } from "./data/key.js";
const router=express.Router();


let ragApp;

export const setRagApp = (app) => {
  ragApp = app;
};


router.get("/", async (req, res) => {
  return res.redirect('/landingPage');
});

router.get("/landingPage",async(req,res)=>{
    res.render('index');
})



router.get("/information",async(req,res)=>{
  try{
    // const{name,ns,dob,birth_minute,birth_hour,phone_basic,travel}=req.body;
    // const [year, month, day] = dob.split('-');
    // const formattedDate = `${day}/${month}/${year}`;
    // console.log(req.body);
    // const sex="male";
    // let  customer={
    //     name: name,
    //     birthdate: formattedDate,
    //     location: ns
    // }
    // const [menh,dungHythan]=await calculate(formattedDate,parseInt(birth_hour),parseInt(birth_minute),sex);
    // const [cities,gptRes]=await destination(ns,dungHythan,ragApp);

    // console.log(cities);

    
    // customer["mệnh"]=menh;
    // customer["dụng-hỷ thần"]=dungHythan;
    // customer[diem_manh]=gptRes[diem_manh];
    // customer[cai_thien]=gptRes[cai_thien];
    // customer[huong]=gptRes[huong];
    // customer[dia_diem]=gptRes[dia_diem];
    // customer[ly_do]=gptRes[ly_do];

    // let chairList=getPositionNumber(dungHythan);

    // console.log(customer);
    // console.log(cities);
    // console.log(chairList);

   
    let customer={
      name: 'Nguyễn Hồng Sơn',
      birthdate: '31/07/2024',
      location: '07',
      'mệnh': 'hỏa',
      'dụng-hỷ thần': 'mộc',
      'Điểm mạnh': 'bạn có khả năng học hỏi nhanh và sáng tạo, khả năng thích ứng tốt với môi trường mới.',
      'Cải thiện': 'cần nâng cao sự ổn định và cân bằng trong cuộc sống, tránh bị cảm xúc chi phối quá mức.',
      'Hướng': 'Đông Nam',
      'Đặc trưng của địa điểm': 'liên quan đến sự phát triển xanh, nhiều cây cối và thảm thực vật phong phú.',
      'Lý do': 'Vị trí Đông Nam với cảnh quan xanh và môi trường trong lành sẽ giúp bạn thư giãn tinh thần và tăng cường sinh khí cho cơ thể. Những địa điểm có nhiều cây cối sẽ giúp bạn hấp thụ năng lượng dương, cân bằng lại các yếu tố trong mệnh cách và tạo ra cảm giác bình yên và mạnh mẽ từ bên trong. Đặc biệt, việc sống trong một môi trường xanh và thoáng mát sẽ giúp bạn tập trung và sáng tạo hơn trong công việc cũng như cuộc sống hàng ngày.'
    }
    let cities={
      'Bắc Kạn': {
        image: [
          '/public/images/cities/backan1.jpeg',
          '/public/images/cities/backan2.jpg',
          '/public/images/cities/backan3.jpg',
          '/public/images/cities/backan4.jpg',
          '/public/images/cities/backan5.jpg'
        ],
        description: 'Bắc Kạn là một tỉnh miền núi phía Bắc của Việt Nam, có cảnh quan thiên nhiên đẹp và hoang sơ, nổi tiếng với hồ Ba Bể - một trong những hồ nước ngọt thiên nhiên lớn nhất Việt Nam. Hồ Ba Bể nằm trong khu vực công viên quốc gia Ba Bể, là một điểm đến du lịch sinh thái nổi tiếng với cảnh quan yên tĩnh, trong lành và hệ sinh thái phong phú. Du khách có thể tham gia vào các hoạt động như đi thuyền, bơi lội, câu cá và thám hiểm hang động. Nơi đây còn có nhiều di tích văn hóa lịch sử và các lễ hội đặc sắc của dân tộc Tày, Nùng.'
      },
      'Cao Bằng': {
        image: [
          '/public/images/cities/caobang1.jpg',
          '/public/images/cities/caobang2.webp',
          '/public/images/cities/caobang3.jpg',
          '/public/images/cities/caobang4.webp',
          '/public/images/cities/caobang5.jpg'
        ],
        description: 'Cao Bằng là một tỉnh biên giới nằm ở phía Đông Bắc Việt Nam, nổi tiếng với thác Bản Giốc, một trong những thác nước đẹp nhất Việt Nam, cùng cảnh quan núi non hùng vĩ và thung lũng rộng lớn. Thác Bản Giốc nằm trên sông Quây Sơn, tạo thành biên giới tự nhiên giữa Việt Nam và Trung Quốc. Khu vực xung quanh thác Bản Giốc có nhiều hoạt động tham quan và du lịch như leo núi, khám phá hang động và thăm quan làng bản dân tộc Tày, Nùng. Đặc biệt, Cao Bằng còn có khu di tích Pác Bó, nơi chủ tịch Hồ Chí Minh từng sống và làm việc trong thời kỳ kháng chiến chống Pháp.'
      },
      'Lạng Sơn': {
        image: [
          '/public/images/cities/langson1.webp',
          '/public/images/cities/langson2.jpg',
          '/public/images/cities/langson3.webp',
          '/public/images/cities/langson4.jpg',
          '/public/images/cities/langson5.webp'
        ],
        description: 'Lạng Sơn là một tỉnh miền núi ở phía Đông Bắc Việt Nam, giáp biên giới với Trung Quốc. Tỉnh này nổi tiếng với cửa khẩu quốc tế Hữu Nghị, nơi giao thương quan trọng giữa Việt Nam và Trung Quốc. Lạng Sơn có cảnh quan núi non hùng vĩ, với nhiều di tích văn hóa lịch sử như động Tam Thanh, hang Nhị Thanh, và chùa Tiên. Ngoài ra, chợ Đồng Đăng là một điểm đến mua sắm nổi tiếng với hàng hóa phong phú và giá cả phải chăng. Lạng Sơn còn được biết đến với những lễ hội văn hóa đặc sắc của các dân tộc thiểu số như Tày, Nùng, Dao.'
      }
    }
    let chairList=[ '13C', '18C', '23C' ]

      res.render('page2',
          {
              customer,
              cities,
              chairList
          }
      )

  }catch(error){
    res.status(200).send({
       "error": "The system get some trouble, please go back the home page and fill again "
    })

  }
  
});

export default router;