const mongoose = require('mongoose');
 const bookSchema=new mongoose.Schema({
    title:String,
    img:String,
    description:String,
    price:Number,
    category:String

 },{timestamps:true})

 const book =mongoose.model('book',bookSchema);
 module.exports=book;