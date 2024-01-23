"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configToken_1 = __importDefault(require("../config/configToken"));
const verifyUserLogin = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("You must be logged in");
    }
    try {
        jsonwebtoken_1.default.verify(JSON.parse(token), configToken_1.default);
        next();
    }
    catch (err) {
        res.status(403).send("Your token has expired or is invalid.");
    }
};
exports.default = verifyUserLogin;
