const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const asyncHandler = require('express-async-handler')


// @description Fetch all Products
// @route GET /api/products
// @access Public
router.get('/products', asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)
}))

// @description Fetch single Products
// @route GET /api/products/id
// @access Public
router.get('/products/:id' , asyncHandler (async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product not found'})
    }
}))

module.exports = router;
