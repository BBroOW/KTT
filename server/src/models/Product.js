const mongoose = require('mongoose');

const Product = mongoose.model(
  'products',
  new mongoose.Schema({
    id: Number,
    type: String,
    productID: String,
    date: String,
    name: String,
    

  })
);

module.exports = Product;