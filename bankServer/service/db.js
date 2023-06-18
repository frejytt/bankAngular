// // import mongoose

const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/bServer')

//model for collection

const User=mongoose.model('User',{   //schema - fields and values in model
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transaction:[]

})

//export model
module.exports={
    User
}