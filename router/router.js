
const express = require("express")
const router = express.Router()

const {createProduct} = require("../Controller/productController")


router.post('/products', createProduct)







module.exports = router;