const productSchema = require("productSchema")
const mongoose = require("mongoose")
const {isValidRequestBody, isValid, isValidName, isValidPrice} = require("../validations/validations")



const productController = function(req,res){
    try{
    const body = req.body
    const{productName,quantity,price,category,discription,image,status,Visibility,stockAvailable}=body

    if(! isValidRequestBody(data)){
        return res.status(400).send({status : false, message : "Please provide some data"})
    }

    if(!productName){
        return res.status(400).send({status : false, message : "Please Enter Product Name"})
    }else{
        if(!isValid(productName)){
            return res.status(400).send({status : false, message : "Product name is Not valid"})
        }
     }

    //  if(!isValidName(productName)){
    //     return res.status(400).send({status : false, message : "Please Enter Valid Product Name"})
    //  }

   

    if(!quantity){
        return res.status(400).send({status : false, message : "Please Enter Quantity "})
    }




    }catch(error){
        return res.status(500).send({ status: false, message: error.message }) 
    }
}