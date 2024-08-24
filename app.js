import express from "express";
import {  PdfLoader, RAGApplicationBuilder, SIMPLE_MODELS, TextLoader } from "@llm-tools/embedjs"
import { LanceDb } from "@llm-tools/embedjs/vectorDb/lance"
import path from 'path'
import bodyParser from 'body-parser';
import router from "./src/routes.js";

import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { LmdbCache } from "@llm-tools/embedjs/cache/lmdb";

dotenv.config();
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public',express.static(path.join(__dirname, 'public')));





app.use("", router);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
