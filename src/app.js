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

const ragApp=await new  RAGApplicationBuilder()
                .setTemperature(0.5)
                .setModel(SIMPLE_MODELS["OPENAI_GPT3.5_TURBO"])
                .setVectorDb(new LanceDb({path: path.resolve('./src/RAG/db')}))
                .addLoader(new PdfLoader({filePathOrUrl: path.resolve('./src/RAG/data/merged.pdf')}))
                .setCache(new LmdbCache({ path: path.resolve('./src/RAG/cache') }))
                .build();

setRagApp(ragApp);

app.use("",router);

app.listen(port, () => {
    console.log(`Server running on port  3000`);
  });

  
export default app;
