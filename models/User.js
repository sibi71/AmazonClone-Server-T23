const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    verified:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true}
);
const User = mongoose.model("users",UserSchema);

module.exports = User;