import send from "send";
import { NEWSData } from "../model/news_model.js";

export const PostNewsController = async (req,res)=>{
    try {
        const news = new NEWSData(req.body);
        console.log(news);
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        res.status(404).json(error.message)
    }
};

export const GetNewsController = async (req,res)=>{

    try {
        const getNews= await NEWSData.find();
        res.status(200).json(getNews);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const GetNewsByCategory = async (req,res)=>{
    try {
        const category=req.params.category;
        const getNewsByCategory= await NEWSData.find({category:category});
        res.status(200).send(getNewsByCategory);
    } catch (error) {
        res.status(501).send(error);
    }
};

export const GetNewsBySource = async (req,res)=>{
    try {
        const source=req.params.source;
        const getNewsBySource= await NEWSData.find({source:source});
        res.status(200).send(getNewsBySource);
    } catch (error) {
        res.status(501).send(error);
    }
};

export const DeleteNewsById = async (req,res)=>{
    try {
        const deleteNews = await NEWSData.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            res.status(404).send("Data Not Found");
        }
        res.status(200).send(deleteNews);
    } catch (error) {
        res.status(501).send(error);
    }
};

export const PatchNewsById = async (req,res)=>{

    try {
        const patchNews= await NEWSData.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(patchNews);
    } catch (error) {
        res.send(error);
    }
}
