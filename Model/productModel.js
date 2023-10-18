const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },

    price:{
        type:Number,
        required: true
    },
    category:{
        type:DragEvent,
        required: true
    },
    discription:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },

    status:{
        type:Boolean,
        required: true
    },

    Visibility:{
        type:Boolean,
        required: true
    },

    stockAvailable:{
        type:Boolean,
        required: true
    }



})

module.exports = mongoose.model(Product,'productSchema')