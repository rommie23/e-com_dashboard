const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')


// const express = require('express');
// const mongoose = require('mongoose')

// const app = express();
// const connectDb = async()=>{
//     mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
//     const productSchema = new mongoose.Schema({})
//     const productModel = mongoose.model('products', productSchema)
//     const data = await productModel.find();
//     console.log(data);
// }
// connectDb()
