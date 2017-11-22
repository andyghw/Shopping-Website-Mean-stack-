const mongoose=require('mongoose');
// const bcrypt =require('bcryptjs');
// const config=require('../config/database-users');

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

const  Product=module.exports=mongoose.model('Product',ProductSchema);

module.exports.getProductById=function (id, callback) {
    Product.findById(id,callback);
}

module.exports.getProductByName=function (name, callback) {
    const  query={name: name}
    Product.findOne(query, callback);
}

// module.exports.addUser=function (newUser,callback) {
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash(newUser.password,salt,(err,hash)=>{
//             if(err) throw err;
//             newUser.password=hash;
//             newUser.save(callback);
//         });
//     });
// }
//
// module.exports.comparePassword=function (candidatePassword,hash,callback) {
//     bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
//         if(err) throw err;
//         callback(null,isMatch);
//     });
// }