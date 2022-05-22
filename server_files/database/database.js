const { default: mongoose } = require("mongoose");
const {Schema}=mongoose;
const userSchema=new Schema({
    fullname: String,
    gender: String,
    DOB: String,
})

module.exports=userSchema;