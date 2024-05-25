import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({

    source: {
         type: String, 
         required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    title: { 
        type:String,
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
})

const NEWSData = new mongoose.model('News', NewsSchema);

export { NEWSData };