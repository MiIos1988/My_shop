import express from "express"
const app = express();
import cors from "cors"
import authRoute from "./routes/authRoute"
import mongoose from "mongoose";
import productRoute from "./routes/productRoute"
import userRoute from "./routes/userRoute"
import mailRoute from "./routes/mailRoute"
const portNumber = 5050;

mongoose
  .connect(
    "mongodb+srv://mongo:mongo@cluster0.gbtuujv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => console.log("MongoDB is connecting..."))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/mail", mailRoute);

app.listen(portNumber, (error?: any) => {
  error
    ? console.log("Error on server start.")
    : console.log(`Server is running on port ${portNumber}... `);
});
