"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const mailRoute_1 = __importDefault(require("./routes/mailRoute"));
const portNumber = 5050;
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then((data) => console.log("MongoDB is connecting..."))
    .catch((error) => console.log(error));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/auth", authRoute_1.default);
app.use("/api/product", productRoute_1.default);
app.use("/api/user", userRoute_1.default);
app.use("/api/mail", mailRoute_1.default);
app.listen(portNumber, (error) => {
    error
        ? console.log("Error on server start.")
        : console.log(`Server is running on port ${portNumber}... `);
});
