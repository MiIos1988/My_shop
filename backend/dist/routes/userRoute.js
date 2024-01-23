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
const userModels_1 = __importDefault(require("../models/userModels"));
const userRoute = express_1.default.Router();
const stripe_1 = __importDefault(require("stripe"));
const verifyUserLogin_1 = __importDefault(require("../validation/verifyUserLogin"));
const verifyAdmin_1 = __importDefault(require("../validation/verifyAdmin"));
const sk = "sk_test_51MgyLeAoAwiaPpyxcWshahWIHczrgJi1jlFR8AmPt0mTSjRE9Mi9S2qC2NnRc56sveI5o2M71oLMT1SooRsDKXLY006LAyfgfX";
const stripeObj = new stripe_1.default(sk, { apiVersion: "2022-11-15", });
userRoute.get("/get-all-users", verifyUserLogin_1.default, verifyAdmin_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModels_1.default.find({});
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
    }
}));
userRoute.put("/is-active", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModels_1.default.findOneAndUpdate({ _id: req.body.id }, { isActive: req.body.checked });
        res.status(200).send("ok");
    }
    catch (err) {
        res.send(err);
    }
}));
userRoute.post("/init-payment", verifyUserLogin_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield stripeObj.paymentIntents.create({
            amount: parseInt(req.body.amount),
            currency: req.body.currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.send(payment);
    }
    catch (_a) {
        (error) => res.send(error);
    }
}));
exports.default = userRoute;
