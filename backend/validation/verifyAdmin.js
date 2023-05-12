const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        let decode = jwt.decode(JSON.parse(token) );
        console.log("--------", decode)
        decode && next();
      } catch (err) {
        res.status(403).send("Your token has expired or is invalid.");
      }
}

module.exports =  verifyAdmin;