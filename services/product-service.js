const mongoose=require('mongoose');
const  Product=mongoose.model('Product');



module.exports.getProductById=function (id, callback) {
    console.log(id);
    Product.findById(mongoose.Types.ObjectId(id),callback);//Transfer string to objectid
};

module.exports.getProductByName=function (name, callback) {
    const  query={name: name};
    Product.findOne(query, callback);
};
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