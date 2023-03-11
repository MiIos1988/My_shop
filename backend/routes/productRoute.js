const express = require('express');
const productRoute = express.Router();

productRoute.get("/get-product", (req, res) => {
    res.send("ok");
} )





module.exports = productRoute