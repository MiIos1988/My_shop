const express = require("express");
const UserModel = require("../models/userModels");
const registerValidation = require("../validation/registerValidation");
const authRoute = express.Router();
const bcrypt = require("bcrypt");
// uuohpdctlngdhdvl

authRoute.post("/register", registerValidation, async (req, res) => {
  req.body.password = bcrypt.hashSync("name", 10);
  try {
    const newUser = await UserModel.create(req.body);
    newUser.save();

    let transporter = nodemailer.createTransport({
      service: gmail,
      auth: {
        user: "vojvoda19881@gmail.com", // generated ethereal user
        pass: "uuohpdctlngdhdvl", // generated ethereal password
      },
    });
    debugger;
    let info = await transporter.sendMail({
      from: '"test" "vojvoda19881@gmail.com"', // sender address
      to: req.body.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<h2>Please confirm registration </h2>
            <p>Click on link</p>
            <a href="http://localost:3000 target="_blank">Go to WebSite</a>    `,
    });
    console.log(info);
  } catch {
    res.status(416).send("Error creating new user");
  }
});

module.exports = authRoute;
