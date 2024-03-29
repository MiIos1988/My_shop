"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModels_1 = __importDefault(require("../models/userModels"));
const registerValidation = (req, res, next) => {
    let body = req.body;
    //********* Email validation */
    const emailToValidate = body.email;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!body.email ||
        !body.username ||
        !body.password ||
        !body.confirmPassword ||
        !body.firstName ||
        !body.lastName ||
        !body.phone ||
        !body.city) {
        return res.status(410).send("Not valid form.");
    }
    if (!emailRegexp.test(emailToValidate)) {
        return res.status(411).send("Invalid email");
    }
    if (body.password !== body.confirmPassword) {
        return res.status(412).send("Your passwords do not match.");
    }
    userModels_1.default.findOne({ email: body.email })
        .then((data) => {
        if (data) {
            return res.status(413).send("Email is exist");
        }
        else {
            userModels_1.default.findOne({ username: body.username })
                .then((data) => {
                if (data) {
                    return res.status(414).send("Username is exist");
                }
                else {
                    next();
                }
            })
                .catch((error) => res.status(415).send("Error in DB"));
        }
    })
        .catch((error) => res.status(415).send("Error in DB"));
};
exports.default = registerValidation;
