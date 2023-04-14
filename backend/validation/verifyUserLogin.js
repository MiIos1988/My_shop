const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/configToken");

const verifyUserLogin = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).send("You must be logged in");
  }
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    next();
  } catch {
    return res.status(403).send("Your token has expired or is invalid.");
  }
};

module.exports = verifyUserLogin;
