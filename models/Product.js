const mongoose = require("mongoose");

const ProductSchema =  mongoose.Schema({
    product_title:{
        type:String , required:true , unique:true
    },
    product_category:{
        type:String , required:true, unique:false
    },
    product_quantity:{
        type:Number , required:true
    },
    product_price:{
        type:String , required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);


