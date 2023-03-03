const express = require('express');
const authRoute = express.Router();

authRoute.post("/register", (req, res) => {
    console.log(req.body)
    res.send("ok")
}
)


module.exports = authRoute