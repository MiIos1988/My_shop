"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSChema = new mongoose_1.default.Schema({
    imgUrl: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    rating: { type: Number, default: 0 },
    userId: { type: String },
    categoryId: { type: String },
    allRatings: { type: Array, default: [] },
});
const ProductModel = mongoose_1.default.model("product", productSChema);
exports.default = ProductModel;
