"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            let decode = jsonwebtoken_1.default.decode(JSON.parse(token));
            decode && next();
        }
    }
    catch (err) {
        res.status(403).send("Your token has expired or is invalid.");
    }
};
exports.default = verifyAdmin;
