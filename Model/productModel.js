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

    currencyId:{
        type:String,
        required: true
    },
        // category:{
    //     type:String,
    //     required: true
    // },
    description:{
        type:String,
        required: true
    },
    // image:{
    //     type:String,
    //     required: true
    // },

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

module.exports = new mongoose.model('Product',productSchema)