const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const infoSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
},{timestamps:true})

const Info = mongoose.model('Information', infoSchema);

module.exports = Info;
