const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = () =>{
    try
    {mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true , useUnifiedTopology : true
    })
    .then(()=>{console.log("Connect to Database")})
    .catch((err)=>{
        console.log("Something is wrong in DB connection")
        console.log(err.message)
        process.exit(1);
})
}catch(err){
    console.log(err.message)
    // return res.send()
}
   
}

module.exports = connectDB