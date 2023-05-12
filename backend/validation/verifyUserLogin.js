const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/configToken");

const verifyUserLogin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("You must be logged in");
  }
  try {
    jwt.verify(JSON.parse(token), JWT_SECRET_KEY)

    next();
  } catch (err) {
    res.status(403).send("Your token has expired or is invalid.");
  }
};

module.exports = verifyUserLogin;
