const express = require("express");
const UserModel = require("../models/userModels");
const userRoute = express.Router();
const stripe = require("stripe");
const verifyUserLogin = require("../validation/verifyUserLogin");
const verifyAdmin = require("../validation/verifyAdmin");
const sk =
  "sk_test_51MgyLeAoAwiaPpyxcWshahWIHczrgJi1jlFR8AmPt0mTSjRE9Mi9S2qC2NnRc56sveI5o2M71oLMT1SooRsDKXLY006LAyfgfX";
const stripeObj = stripe(sk);

userRoute.get("/get-all-users", verifyUserLogin, verifyAdmin, async (req, res) => {
  try{
    const data = await UserModel.find({});
    res.status(200).send("ok");
  }catch(err){
    console.log(err);
  }
});

userRoute.put("/is-active", async (req, res) => {
  try{
    await UserModel.findOneAndUpdate(
      { _id: req.body.id },
      { isActive: req.body.checked }
    );
    res.status(200).send("ok");
  }catch(err){
    res.send(err)
  }
});

userRoute.post("/init-payment", verifyUserLogin, async (req, res) => {
  try {
    const payment = await stripeObj.paymentIntents.create({
      amount: parseInt(req.body.amount),
      currency: req.body.currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send(payment);
  } catch {
    (err) => res.send(err);
  }
});


module.exports = userRoute;
