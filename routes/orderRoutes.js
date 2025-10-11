const express = require("express");
const Order = require("../models/Order");
const router =  express.Router();

//create order router end point
router.post("/create",async(req,res)=>{
    try {
        const {
            username,useremail,userphone,useraddress,
            useritem_quantity, userproduct_id
        } = req.body;

       //check if item exist
       const isItemExist = await Order.findOne({userproduct_id});
       if(isItemExist) res.status(400).json({msg:"Product Already Exist!"});

       // create order 
       const orderCreacted = await Order.create({username,
        useremail,userphone,useraddress,useritem_quantity,
        userproduct_id
       });
          res.status(201).json({msg:"Order Created Successfully!"});
    } catch (error) {
          res.status(400).json({msg:"order creation failed!"});
    }
});

router.get("/get",async(req,res)=>{
    try {
         const orderAvailable = await Order.find().select("-userproduct_id");
         res.status(201).json({orderAvailable});
    } catch (error) {

        res.status(400).json({msg:"No Order Found!"});        
    }
});

module.exports = router;