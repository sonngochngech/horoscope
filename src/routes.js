import express from "express";
import { calculate } from "./service/hy_than.js";
import { destination } from "./service/destination.js";
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
    const [birthdate,hour,minute,sex,city]=["17/09/2003",15,30,"male","Hải Phòng"];
    const dungHythan=await calculate(birthdate,hour,minute,sex);
    console.log(dungHythan);
    const images=await destination(city,dungHythan,ragApp);
    console.log(images);

    res.status(200).send({
        "hello":"hel"
    })



});

export default router;