import express from "express";
import { calculate } from "./service/hy_than.js";
import { destination, getPositionNumber } from "./service/destination.js";
import { cai_thien, dia_diem, diem_manh, huong, ly_do } from "./data/key.js";
import { city_array } from "./data/citi_array.js";
const router=express.Router();




router.get("/", async (req, res) => {
  return res.redirect('/landingPage');
});

router.get("/landingPage",async(req,res)=>{
    res.render('index');
})

router.get("/hello",async (req, res) => {
  return res.render('error');
})



router.post("/information",async(req,res)=>{
  try{
    console.log(req.body);
    const{name,birthplace,dob,minute,hour,gender}=req.body;
    const [day,month,year] = dob.split('/');
    const formattedDate = `${day}/${month}/${year}`;
    const ns_number=parseInt(birthplace);
    const hometown=city_array[ns_number-1]?.name;
    const sex=gender;
    let  customer={
        name: name,
        birthdate: formattedDate,
        location: hometown
    }
    const [menh,dungHythan]=await calculate(formattedDate,parseInt(hour),parseInt(minute),sex);
    const [cities,gptRes]=await destination(birthplace,dungHythan,menh);

    // console.log(cities);

    
    customer["mệnh"]=menh;
    customer["dụng-hỷ thần"]=dungHythan;
    customer[diem_manh]=gptRes[diem_manh];
    customer[cai_thien]=gptRes[cai_thien];
    customer[huong]=gptRes[huong];
    customer[dia_diem]=gptRes[dia_diem];
    customer[ly_do]=gptRes[ly_do];

    let chairList=getPositionNumber(dungHythan);

    
      res.render('page2',
          {
              customer,
              cities,
              chairList
          }
      )

  }catch(error){
    console.log(error);
    res.render('error')

  }
  
});

export default router;