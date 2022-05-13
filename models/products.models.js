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
  
  export default mongoose.model("Product", ProductSchema);