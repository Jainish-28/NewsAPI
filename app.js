import express from "express";
import { NEWSData } from "./model/news_model.js";
import {connection} from "./config/news_database.js"
import { router } from "./router/news_router.js";

const app=express();

app.use(router);
app.use(express.json());

const port= process.env.port || 6000;

app.listen(port,()=>{
    console.log(`${port} started Successfully`);
})