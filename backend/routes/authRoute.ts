import express from "express"
import UserModel from "../models/userModels";
import registerValidation from "../validation/registerValidation";
const authRoute = express.Router();
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import sendMail from "../service/mailService"
import htmlActivation from "../template/mailTemplate"
import  JWT_SECRET_KEY  from "../config/configToken";

authRoute.post("/register", registerValidation, async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const newUser = await UserModel.create(req.body);
    const activationMailHtml = htmlActivation(
      `https://my-shop-nine-zeta.vercel.app/activation-account/${newUser?._id}`
    );
    await sendMail(
      "vojvoda19881@gmail.com",
      req.body.email,
      "Test email",
      activationMailHtml
    );
    res.send("User registered.");
  } catch {
    res.status(416).send("Error creating new user");
  }
});

authRoute.post("/login", async (req, res) => {
  try {
    const body = req.body;
    const data = await UserModel.findOne({ email: body.email });
    if (!data) {
      res.status(417).send("Email is not valid");
    } else if (data.password && !bcrypt.compareSync(body.password, data.password)) {
      res.status(417).send("Password is not valid");
    } else if (!data.isActive) {
      res
        .status(418)
        .send(
          "You must activate your account. Go to the email and click on the link."
        );
    } else {
      let ts = new Date().getTime();
      let userData = {
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        city: data.city,
        isAdmin: data.isAdmin,
        ts: ts,
      };
      let token = jwt.sign(userData, JWT_SECRET_KEY);

      res.send({ token });
    }
  } catch (err) {
    console.log(err);
  }
});

authRoute.put("/active", async (req, res) => {
  try {
    const update = { isActive: true };
    await UserModel.findOneAndUpdate(req.body, update);
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
});

export default authRoute;
