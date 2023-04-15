const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/configToken");

const verifyUserLogin = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  console.log(JWT_SECRET_KEY);

  if (!token) {
    return res.status(401).send("You must be logged in");
  }
  try {
    const decodedToken = jwt.decode(token, JWT_SECRET_KEY)

    console.log("----------", decodedToken)
    next();
  } catch {
    return res.status(403).send("Your token has expired or is invalid.");
  }
};

module.exports = verifyUserLogin;
