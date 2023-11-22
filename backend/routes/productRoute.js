const express = require("express");
const ProductModel = require("../models/productModels");
const productRoute = express.Router();

productRoute.post("/get-product", async (req, res) => {
  try {
    const countQuery = await ProductModel.countDocuments({});
    const pagination = req.body;
    const data = await ProductModel.find({})
      .skip(pagination.start * pagination.perPage)
      .limit(pagination.perPage)
      .lean();
    res.send({ data, countQuery });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

productRoute.post("/search-product", async (req, res) => {
  try {
    const data = await ProductModel.find({
      title: { $regex: req.body.search, $options: "i" },
    });
    const countQuery = data.length;
    res.send({ data, countQuery });
  } catch (err) {
    res.status(500).send({ error: "An error occurred while searching." });
  }
});

productRoute.post("/category-product", async (req, res) => {
  try {
    const { pagination, categoryId } = req.body;
    const countQuery = await ProductModel.find({ categoryId }).countDocuments();
    const data = await ProductModel.find({ categoryId })
      .skip(pagination.start * pagination.perPage)
      .limit(pagination.perPage);
    res.status(200).send({ data, countQuery });
  } catch (err) {
    res.send(err);
  }
});

productRoute.get("/get-one-product/:id", async (req, res) => {
  try {
    const data = await ProductModel.findOne({ _id: req.params.id });
    res.status(200).send({ data });
  } catch (err) {
    res.status(421).send(err);
  }
});

productRoute.put("/edit-product", async (req, res) => {
  try {
    const data = await ProductModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.status(200).send("ok");
  } catch (err) {
    console.log(err);
  }
});

productRoute.post("/add-product", async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.status(200).send("ok");
  } catch (err) {
    res.status(420).send("Error in database");
  }
});

productRoute.delete("/product", async (req, res) => {
  try {
    await ProductModel.findOneAndDelete(req.query);
    res.status(200).send("ok");
  } catch (err) {
    console.log(err);
  }
});

module.exports = productRoute;
