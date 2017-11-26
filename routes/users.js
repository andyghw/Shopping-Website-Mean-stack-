const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database-users');
var Cart=require('../models/cart');



const Product=require('../models/product')
const  User=require('../models/user');


//register
router.post('/register', (req,res,next) =>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    User.addUser(newUser, (err,user)=>{
        if(err){
            res.json({success:false,msg:'Failed to register new user'});
        }
        else{
            res.json({success:true,msg:'Succeed to register new user'});
        }
    });
});

// //add items to cart
// router.put('/cart',(req,res,next)=>{
//     let newUser=new User({
//         name:req.body.name,
//         email:req.body.email,
//         username:req.body.username,
//         password:req.body.password,
//         cartcontent:req.body.cartcontent
//     });
//
//     User.updateUser(newUser, (err,user)=>{
//         if(err){
//             res.json({success:false,msg:'Failed to add items to cart'});
//         }
//         else{
//             res.json({success:true,msg:'Succeed to add items to cart'});
//         }
//     });
// });




//authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}),(req,res,next) =>{
    res.json({user:req.user});
});
//add to cart
router.get('/add-to-cart',function (req, res, next) {

    var productId=req.params.id;
    var cart=new Cart(req.session.cart?req.session.cart:{items:{}});

    Product.findById(productId,function (err,product) {
        if(err){
            return res.redirect('/productList')
        }
        cart.add(product,product.id);
        req.session.cart=cart;
        console.log(req.session.cart);
        res.redirect('/productList');
    })
});

module.exports = router;