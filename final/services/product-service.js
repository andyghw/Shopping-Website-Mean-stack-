const mongoose=require("mongoose");
const Product=mongoose.model('Product');

module.exports.getProductById=function (id, callback) {
    Product.findById(id,callback);
}

module.exports.getProductByName=function (name, callback) {
    const  query={name: name}
    Product.findOne(query, callback);
}