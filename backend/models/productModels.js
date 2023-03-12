const Mongoose = require("mongoose");

const productSChema = new Mongoose.Schema({
  imgUrl: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  rating: { type: Number },
  userId: { type: String },
  allRatings: { type: Array },
});

const ProductModel = Mongoose.model("product", productSChema);
module.exports = ProductModel;
