const express = require("express");
const UserModel = require("../models/userModels");
const userRoute = express.Router();

userRoute.get("/get-all-users", (req, res) => {
    UserModel.find({}).then(data => res.send(data))
    .catch(err => console.log(err))
})





module.exports = userRoute;