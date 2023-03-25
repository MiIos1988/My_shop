const express = require("express");
const UserModel = require("../models/userModels");
const userRoute = express.Router();

userRoute.get("/get-all-users", (req, res) => {
    UserModel.find({}).then(data => res.send(data))
    .catch(err => console.log(err))
})

userRoute.put("/is-active", (req, res) => {
    UserModel.findOneAndUpdate({_id: req.body.id}, {isActive: req.body.checked}).then(data => res.send("ok"))
    .catch(err => res.send(err))
})




module.exports = userRoute;