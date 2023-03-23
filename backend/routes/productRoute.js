const express = require("express");
const ProductModel = require("../models/productModels");
const productRoute = express.Router();

productRoute.post("/get-product", async (req, res) => {
  const countQuery = await ProductModel.where({}).countDocuments();
  let pagination = req.body;
  // console.log(pagination)
  ProductModel.find({})
    .skip(pagination.start * pagination.perPage)
    .limit(pagination.perPage)
    .then((data) => {
      res.send({ data, countQuery });
    });
});

productRoute.post("/add-product", async (req, res) => {
  console.log(req.body)
  try {
    const newProduct = await ProductModel.create(req.body);
    newProduct.save();
    res.send("ok")
  } catch (err) {
    res.status(420).send("Error in database")
  }
})

productRoute.delete("/product", (req, res) => {
  ProductModel.deleteOne(req.query).then(data => res.send(ok))
    .catch(err => console.log(err))
})




module.exports = productRoute;
