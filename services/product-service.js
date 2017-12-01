// const mongoose=require('mongoose');
// const  Product=mongoose.model('Product');




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