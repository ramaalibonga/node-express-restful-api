const express = require("express");
const Product = require("../models/Product");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();


router.post("/create",async(req,res)=>{
    try {
        const {product_title,product_category,product_quantity,product_price} = req.body;

        const productExist =  await Product.findOne({product_title});
        if(productExist) res.status(400).json({msg:"product already exist!"});
        const product = await Product.create({product_title,product_category,
            product_quantity,product_price
        });
        res.status(201).json({msg:"product created successfully!"});
        
    } catch (error) {
        res.status(501).json({msg:"product creaction failed!"});
        
    }

});

router.get("/get",protect,async(req,res)=>{

    try {
        const productAll = await Product.find().select("-product_price");
        res.json({productAll});
    } catch (error) {
        res.status(400).json({msg:"No Product Found!"});
        
    }
});

module.exports = router