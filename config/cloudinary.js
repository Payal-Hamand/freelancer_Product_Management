const cloudinary = require('cloudinary').v2;
require('dotenv').config()
exports.cloudinaryApi = () =>{
   try {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.SECRET_KEY,
    })
}catch(err){
    console.log("error occure in claudinary connection",err)
}
}