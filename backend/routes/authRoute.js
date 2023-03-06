const express = require("express");
const UserModel = require("../models/userModels");
const registerValidation = require("../validation/registerValidation");
const authRoute = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// uuohpdctlngdhdvl

authRoute.post("/register", registerValidation, async (req, res) => {
  req.body.password = bcrypt.hashSync("name", 10);
  try {
    const newUser = await UserModel.create(req.body);
    newUser.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.gmail.com",
      // port: 587,
      // secure: false,
      auth: {
        user: "vojvoda19881@gmail.com", // generated ethereal user
        pass: "uuohpdctlngdhdvl", // generated ethereal password

      },

    });
    let info = await transporter.sendMail({
      from: ' "test" "vojvoda19881@gmail.com"', // sender address
      to: req.body.email, // list of receivers
      subject: "Test email", // Subject line
      text: "Hello world?", // plain text body
      html: `<h2 style="color: red">Please confirm registration </h2>
            <p>Click on link</p>
            <a  href="http://localhost:3000/activation-account/${newUser?._id}" target="_blank">Go to WebSite</a>    `,
    });
    res.send("Send email")
  } catch {
    res.status(416).send("Error creating new user");
  }
});

authRoute.put("/active:id", (req, res) => {
  console.log(req.params.id)
  req.send("ok")
})

module.exports = authRoute;
