const express = require('express');
const router = express.Router();


const  productservice=require('../models/product');

//get data
router.get('/',(req,res) =>{
    productservice.find({}).exec((err,products)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(products);
        }
    });
});

module.exports = router;