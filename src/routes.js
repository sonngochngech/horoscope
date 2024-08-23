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



router.post("/information",async(req,res)=>{
  try{
    const{name,ns,dob,birth_minute,birth_hour,phone_basic,travel}=req.body;
    const [year, month, day] = dob.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    console.log(req.body);
    const sex="male";
    let  customer={
        name: name,
        birthdate: formattedDate,
        location: ns
    }
    const [menh,dungHythan]=await calculate(formattedDate,parseInt(birth_hour),parseInt(birth_minute),sex);
    const [cities,gptRes]=await destination(ns,dungHythan,ragApp);

    console.log(cities);

    
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
    res.status(200).send({
       "error": "The system get some trouble, please go back the home page and fill again "
    })

  }
  
});

export default router;