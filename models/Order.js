const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
       username:{
        type:String, required:true,
       },
       useremail:{
        type:String , required:true
       },
       userphone:{
        type:String , required:true
       },
       useraddress:{
        type:String , required:true
       },
       useritem_quantity:{
         type:Number, required:true
       },
       userproduct_id:{
        type:String , required:true,unique:true
       }
},{timeStamps:true});

module.exports = mongoose.model("Order",orderSchema);