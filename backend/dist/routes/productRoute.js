"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productModels_1 = __importDefault(require("../models/productModels"));
const productRoute = express_1.default.Router();
productRoute.post("/get-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countQuery = yield productModels_1.default.countDocuments({});
        const pagination = req.body;
        const data = yield productModels_1.default.find({})
            .skip(pagination.start * pagination.perPage)
            .limit(pagination.perPage)
            .lean();
        res.send({ data, countQuery });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}));
productRoute.post("/search-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productModels_1.default.find({
            title: { $regex: req.body.search, $options: "i" },
        });
        const countQuery = data.length;
        res.send({ data, countQuery });
    }
    catch (err) {
        res.status(500).send({ error: "An error occurred while searching." });
    }
}));
productRoute.post("/category-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pagination, categoryId } = req.body;
        const countQuery = yield productModels_1.default.find({ categoryId }).countDocuments();
        const data = yield productModels_1.default.find({ categoryId })
            .skip(pagination.start * pagination.perPage)
            .limit(pagination.perPage);
        res.status(200).send({ data, countQuery });
    }
    catch (err) {
        res.send(err);
    }
}));
productRoute.get("/get-one-product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productModels_1.default.findOne({ _id: req.params.id });
        res.status(200).send({ data });
    }
    catch (err) {
        res.status(421).send(err);
    }
}));
productRoute.put("/edit-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productModels_1.default.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.status(200).send("ok");
    }
    catch (err) {
        console.log(err);
    }
}));
productRoute.post("/add-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productModels_1.default.create(req.body);
        res.status(200).send("ok");
    }
    catch (err) {
        res.status(420).send("Error in database");
    }
}));
productRoute.delete("/product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productModels_1.default.findOneAndDelete(req.query);
        res.status(200).send("ok");
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = productRoute;
