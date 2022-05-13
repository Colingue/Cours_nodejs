import { mongoose } from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  });
  
  const Product = mongoose.model("Product", ProductSchema);
  
  module.exports = Product;