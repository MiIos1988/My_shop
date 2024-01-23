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
const registerValidation_1 = __importDefault(require("../validation/registerValidation"));
const authRoute = express_1.default.Router();
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailService_1 = __importDefault(require("../service/mailService"));
const mailTemplate_1 = __importDefault(require("../template/mailTemplate"));
const configToken_1 = __importDefault(require("../config/configToken"));
authRoute.post("/register", registerValidation_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.password = bcrypt_1.default.hashSync(req.body.password, 10);
    try {
        const newUser = yield userModels_1.default.create(req.body);
        const activationMailHtml = (0, mailTemplate_1.default)(`https://my-shop-nine-zeta.vercel.app/activation-account/${newUser === null || newUser === void 0 ? void 0 : newUser._id}`);
        yield (0, mailService_1.default)("vojvoda19881@gmail.com", req.body.email, "Test email", activationMailHtml);
        res.send("User registered.");
    }
    catch (_a) {
        res.status(416).send("Error creating new user");
    }
}));
authRoute.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield userModels_1.default.findOne({ email: body.email });
        if (!data) {
            res.status(417).send("Email is not valid");
        }
        else if (data.password && !bcrypt_1.default.compareSync(body.password, data.password)) {
            res.status(417).send("Password is not valid");
        }
        else if (!data.isActive) {
            res
                .status(418)
                .send("You must activate your account. Go to the email and click on the link.");
        }
        else {
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
            let token = jsonwebtoken_1.default.sign(userData, configToken_1.default);
            res.send({ token });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
authRoute.put("/active", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = { isActive: true };
        yield userModels_1.default.findOneAndUpdate(req.body, update);
        res.send("ok");
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = authRoute;
