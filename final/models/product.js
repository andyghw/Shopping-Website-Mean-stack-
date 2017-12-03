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

module.exports=mongoose.model('Product',ProductSchema);



