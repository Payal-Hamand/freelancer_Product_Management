const product= require("../Model/productModel")
const mongoose = require("mongoose")
const {isValidRequestBody, isValid, isValidNumber,isValidName} = require("../validation/validation")



const createProduct = async function(req,res){
    try{
    const data = req.body
    const{productName,quantity,price,currencyId, category,description,image,status,Visibility,stockAvailable}=data

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
    if(!isValidNumber(quantity)){
        return res.status(400).send({status : false, message : "Please Enter valid Quantity "})
    }
     
    if(!price){
        return res.status(400).send({status : false, message : "Price must be present"})
    }else{
        if(!isValid(price)){
            return res.status(400).send({status : false, message : "price is missing"})
        }

        if(!isValidNumber(price)){
            return res.status(400).send({status : false, message : "please enter a valid price"})
        }
    }

    if(!currencyId){
        return res.status(400).send({status : false, message : "currencyId must be present"})
    }

    if(currencyId){
        if(!isValid(currencyId)){
            return res.status(400).send({status : false, message : "currency id is missing"})
        }
        if(currencyId !== "INR"){
            return res.status(400).send({status : false, message : "Currency ID Must be in INR"})
        }
    } 
    else{
        data.currencyId = "INR"
    }

    if(!description){
        return res.status(400).send({status : false, message : "description is a required field"})
    }else{

        if(!isValid(description)){
            return res.status(400).send({status : false, message : "This is not a valid description"})
        } 
        if(!isValidName(description)){
            return res.status(400).send({status : false, message : "This is not a valid description"})
        }
    }
         if(!status){
         return res.status(400).send({status : false, message : "status is a required field"})
        }
  
        if(!isValid(status)){
            return res.status(400).send({status : false, message : "Status  is Not valid"})
        }
        if (["true", "false"].includes(status) === false) {
            return res.status(400).send({ status: false, message: "Status should be boolean" });
        }

        if(!Visibility){
            return res.status(400).send({status : false, message : "visibility is a required field"})
           }
     
           if(!isValid(Visibility)){
               return res.status(400).send({status : false, message : "visibility  is Not valid"})
           }
           if (["true", "false"].includes(Visibility) === false) {
               return res.status(400).send({ status: false, message: "visibility should be boolean" });
           }


           if(!stockAvailable){
            return res.status(400).send({status : false, message : "stockAvailable is a required field"})
           }
     
           if(!isValid(stockAvailable)){
               return res.status(400).send({status : false, message : "stockAvailable  is Not valid"})
           }
           if (["true", "false"].includes(stockAvailable) === false) {
               return res.status(400).send({ status: false, message: "stockAvailable should be boolean" });
           }






    let createProduct = await product.create(data)
        if(createProduct){
            return res.status(201).send({status : true, message : "Product successfully created", data : createProduct})
        }




    }catch(error){
        console.log(error);
        return res.status(500).send({ status: false, message: error.message }) 
       
    }
}


module.exports ={createProduct}