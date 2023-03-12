const express = require("express");
const ProductModel = require("../models/productModels");
const productRoute = express.Router();

productRoute.post("/get-product", async (req, res) => {
  const countQuery = await ProductModel.where({}).countDocuments();
  let pagination = req.body;
  ProductModel.find({})
    .skip(pagination.start)
    .limit(pagination.perPage)
    .then((data) => {
      res.send({ data, countQuery });
    });
});
module.exports = productRoute;
