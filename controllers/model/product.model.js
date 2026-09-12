const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
  },
  {
    timestamps: true
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;