
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    status: Boolean,
    name: {
        type: String,
        required:false
    },
    firstname:{
        type:String,
        required: false
    },
    address:{
        type:String,
        required: false
    },
    tel:{
        type: Number
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);