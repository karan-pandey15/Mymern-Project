const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }
})

const Register = mongoose.model("EnquiryData",EnquirySchema);
module.exports = Register;
