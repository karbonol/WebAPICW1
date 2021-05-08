const mongoose = require('mongoose')
const schema = mongoose.Schema({
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    address:{
        required:true,
        type:String
    },
    city:{
        required:true,
        type:String
    },
    zipCode:{
        required:true,
        type:Number
    },
    password:{
        required:true,
        type:String
    },
    phoneNumber:{
        required:true,
        type:String
    },
    isLogged:{
        type:Boolean,
        default:true
    },
    forgetPasswordCode:{
        type : String,
        unique : true
    }
})
module.exports = mongoose.model("User",schema)