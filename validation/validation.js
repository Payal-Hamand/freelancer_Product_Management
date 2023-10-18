const isValidRequestBody = function (value) {
    return Object.keys(value).length > 0;
};

//validaton check for the type of Value --
const isValid = (value) => {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length == 0) return false;
    if (typeof value === "number" && value.toString().trim().length === 0) return false;
    return true;
};





const isValidName = (value)=>{
    let namePattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/g

    if(namePattern.test(value)){
        return true
    }else{return false}
}






const isValidPrice = (value)=>{
    let priceRegex=/^\d+(,\d{3})*(\.\d{1,2})?$/g
    if(priceRegex.test(value)){
        return true
    }else{
        return false
    }
}





module.exports = {
    isValid,
    isValidName, 
    isValidRequestBody, 
    isValidPrice,
    
 
}