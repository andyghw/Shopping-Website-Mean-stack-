const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const  User=require('../models/user');
var objectId=require('mongodb').ObjectId;

//get items from cartcontent
router.get('/itemsincart/:name',(req,res,next) => {
    User.getUserByUsername(req.params.name, (err, user) => {
        //console.log(111);
            if(err){
                console.log(err);
            }
            else{
                res.json(user.cartcontent);
                //console.log(1)
            }
        });
});
module.exports = router;