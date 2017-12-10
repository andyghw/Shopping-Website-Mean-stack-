const mongoose=require('mongoose');
const bcrypt =require('bcryptjs');
const config=require('../config/database-users');
var objectId=require('mongodb').ObjectId;
var assert=require('assert');
//Schema
const UserSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartcontent:{
        _id:String,
        name:String,
        price:String,
        description:String,
        location:String,
        image:String,
        Qty:String
    },
    bookmark:{
        name:String,
        url:String,
        image:String
    }
});

 const User=module.exports =mongoose.model('User',UserSchema);
// module.exports.getUserById=function (id, callback) {
//     User.findById(id,callback);
// };
//
// module.exports.getUserByUsername=function (username, callback) {
//     const  query={username: username};
//     User.findOne(query, callback);
// };
//
// module.exports.addUser=function (newUser,callback) {
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash(newUser.password,salt,(err,hash)=>{
//             if(err) throw err;
//             newUser.password=hash;
//             newUser.save(callback);
//         });
//     });
// };
// module.exports.addItemInUser=function (user,product,callback) {
//     User.update(
//         {_id:user.id},
//         {$push:{
//             cartcontent:{
//                 name:product.name,
//                 _id:product._id,
//                 price:product.price,
//                 location:product.location,
//                 description:product.description,
//                 image:product.image,
//                 Qty:1
//             }
//         }
//         },callback
//     );
// };
// module.exports.updateItemInUser=function (user,product,callback) {
//     // User.updateOne(
//     //     {name:user.name,"cartcontent.name":product.name},
//     //     {
//     //         $inc:{
//     //             cartcontent:{
//     //                 Qty: 1
//     //             }
//     //         }
//     //
//     //     },callback
//     // );
//     User.update({"name":"Ruixin Li"}, {$inc:{"s":3}},callback);
// };
//
// module.exports.checkItem=function (productname,username,callback) {
//     const  query={productname: productname};
//     User.find({"name":username,"cartcontent.name":productname},callback);
// };
// module.exports.comparePassword=function (candidatePassword,hash,callback) {
//     bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
//         if(err) throw err;
//         callback(null,isMatch);
//     });
// };
