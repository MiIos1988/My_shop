"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: "vojvoda19881@gmail.com",
        pass: "tzuhspkfqkzbsbes",
    },
});
const sendMail = function (from, to, subject, html) {
    let mailOptions = {
        from: `"Shop" ${from}`,
        to: to,
        subject: subject,
        html: html, // html body
    };
    return transporter.sendMail(mailOptions);
};
exports.default = sendMail;
