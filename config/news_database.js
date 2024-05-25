import mongoose, { Error } from "mongoose";

const connection = mongoose.connect('mongodb://localhost:27017/newsApiData').then(()=>{console.log("Successfully");}).catch((err)=>{console.log("error");});

export {connection};