const express = require("express");
const UserModel = require("../models/userModels");
const registerValidation = require("../validation/registerValidation");
const authRoute = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")


authRoute.post("/register", registerValidation, async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const newUser = await UserModel.create(req.body);
    newUser.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.gmail.com",
      // port: 587,
      // secure: false,
      auth: {
        user: "vojvoda19881@gmail.com",
        pass: "tzuhspkfqkzbsbes",

      },

    });
    let info = await transporter.sendMail({
      from: ' "test" "vojvoda19881@gmail.com"',
      to: req.body.email,
      subject: "Test email",
      html: `<h2 style="color: red">Please confirm registration </h2>
            <p>Click on link</p>
            <a  href="http://localhost:3000/activation-account/${newUser?._id}" target="_blank">Go to WebSite</a>    `,
    });
    res.send("Send email")
  }
  catch {
    res.status(416).send("Error creating new user");
  }
});

authRoute.post("/login", (req, res) => {
  const body = req.body
  UserModel.findOne({ email: body.email }).then(data => {

    if (!data) { res.status(417).send("Email is not valid") }
    else if (!bcrypt.compareSync(body.password, data.password)) {
      res.status(417).send("Password is not valid");
    } else {
      let ts = new Date().getTime()
      let token = jwt.sign({ ...data, ts }, "log");
      data.password = undefined;
      data.isAdmin = undefined;
      data.isActive = undefined;
      // console.log(data)
      res.send({ data, token })
    }
  })
    .catch(err => console.log(err))
})
authRoute.put("/active", (req, res) => {
  console.log("body---", req.body)
  // const filter = { name: 'Jean-Luc Picard' };
  const update = { isActive: true };
  UserModel.findOneAndUpdate(req.body, update)
    .then(data => res.send("ok"))
    .catch(err => console.log(err))

})

module.exports = authRoute;
