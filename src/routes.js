import express from "express";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';
const router=express.Router();
const data = fs.readFileSync('./src/yearData/age.json', 'utf-8');
const yearData = JSON.parse(data);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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

router.post("/hello",async(req,res)=>{
    const {name,phoneNumber,birthdate,sex,tuvi}=req.body;
 
    console.log(req.body); 
   
    try{
        const date = new Date(birthdate);
        const year = date.getFullYear();
        const nameYear=yearData["year"][(year%12)];
        const requestType=yearData["aspect"][tuvi];
        const query=` Tôi sinh ngày ${birthdate} tức tôi tuổi ${nameYear}. Hãy cho tôi tử vi của tôi về ${requestType} của tôi `;
        const queryRes=await ragApp.query(query);
        const product=yearData["product"][(year%12)];
    
        res.render('result',{queryRes,product});


    }catch(error){
        console.log(error);
        res.status(500).send("Error processing query");
    }

});


export default router;