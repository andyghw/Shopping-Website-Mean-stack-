// const mongoose=require('mongoose');
// // const bcrypt =require('bcryptjs');
// // const config=require('../config/database-users');
//
// //Schema
// const ProductSchema=mongoose.Schema({
//     name:{
//         type:String
//     },
//     price:{
//         type:String
//     },
//     location:{
//         type:String
//     },
//     description:{
//         type:String
//     },
//     image:{
//         type:String
//     },
//     _id:{
//         type:String
//     }
// });
//
// // module.exports=mongoose.model('Product',ProductSchema);
// module.exports=mongoose.model('Product',ProductSchema);
const mongoose=require('mongoose');


//Schema
const ProductSchema=mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
});

const Product=module.exports=mongoose.model('Product',ProductSchema);
module.exports.getProductById=function (id, callback) {
    console.log(id);
    Product.findById(mongoose.Types.ObjectId(id),callback);//Transfer string to objectid
};

module.exports.getProductByName=function (name, callback) {
    const  query={name: name};
    Product.findOne(query, callback);
};