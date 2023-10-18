const product= require("../Model/productModel")
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose")
const {isValidRequestBody, isValid, isValidNumber,isValidName} = require("../validation/validation")


function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}



const createProduct = async function(req,res){
    try{
    const data = req.body
    const{productName,quantity,price,currencyId, category,description,status,Visibility,stockAvailable}=data

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

     if(!isValidName(productName)){
        return res.status(400).send({status : false, message : "Please Enter Valid Product Name"})
     }

   

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

           // Image

           const file = req.files.imageFile;
           console.log(file);
            //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }
        //file format supported hai
        console.log("Uploading to Codehelp");
        const response = await uploadFileToCloudinary(file, "imageUpload");
        console.log(response);





    let createProduct = await product.create(data,{image:response.secure_url,})
        if(createProduct){
            return res.status(201).send({status : true, message : "Product successfully created", data : createProduct,image:response.secure_url,})
        }




    }catch(error){
        console.log(error);
        return res.status(500).send({ status: false, message: error.message }) 
       
    }
}


module.exports ={createProduct}