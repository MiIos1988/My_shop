"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSChema = new mongoose_1.default.Schema({
    email: { type: String },
    username: { type: String },
    password: { type: String },
    // confirmPassword: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    city: { type: String },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
});
const UserModel = mongoose_1.default.model("users", userSChema);
exports.default = UserModel;
