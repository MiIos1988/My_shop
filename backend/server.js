const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const portNumber = 5050;

mongoose
  .connect(
    "mongodb+srv://mongo:mongo@cluster0.gbtuujv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => console.log("MongoDB is connecting..."))
  .catch((error) => console.log(error));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

app.listen(portNumber, (error) => {
  error
    ? console.log("Error on server start.")
    : console.log(`Server is running on port ${portNumber}... `);
});
