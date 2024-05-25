import express from "express";
import { NEWSData } from "../model/news_model.js";
import { DeleteNewsById, GetNewsByCategory, GetNewsBySource, GetNewsController, PatchNewsById, PostNewsController } from "../controller/news_controller.js";



const router= new express.Router();

router.post('/news',PostNewsController);

router.get('/news',GetNewsController);

// router.get('/news/:category',GetNewsByCategory);

router.get('/news/:category?/:source',GetNewsBySource);

router.delete('/news/:id',DeleteNewsById);

router.patch('/news/:id',PatchNewsById);

export{router};