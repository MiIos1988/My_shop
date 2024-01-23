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
const mailService_1 = __importDefault(require("../service/mailService"));
const mailRoute = express_1.default.Router();
mailRoute.post("/send-contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        yield (0, mailService_1.default)(body.email, "vojvoda1988@gmail.com", body.subject, body.message);
        res.send("Message send.");
    }
    catch (error) {
        res.status(415).send(error);
    }
}));
exports.default = mailRoute;
