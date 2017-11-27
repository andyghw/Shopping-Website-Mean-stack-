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
        name:String,
        price:String,
        description:String,
        location:String,
        image:String
    }
});

const  User=module.exports=mongoose.model('User',UserSchema);

module.exports.getUserById=function (id, callback) {
    User.findById(id,callback);
};

module.exports.getUserByUsername=function (username, callback) {
    const  query={username: username};
    User.findOne(query, callback);
};

module.exports.addUser=function (newUser,callback) {
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
};
module.exports.updateUser=function (newUser,callback) {
    var id=newUser.id;
    User.where({_id:id}).update({$set:{cartcontent:newUser.cartcontent}});
    //User.updateOne({"_id":objectId(id)},{$set:newUser})
};
module.exports.comparePassword=function (candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}