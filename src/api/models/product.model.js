const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    photo: {
      type: String,
      required: true,
      default:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
    },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    type: { type: String, enum: ["videogame", "laptop", "phone"] },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;