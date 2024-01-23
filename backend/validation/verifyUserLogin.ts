import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config/configToken";
import { Request, Response, NextFunction } from "express";

const verifyUserLogin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("You must be logged in");
  }
  try {
    jwt.verify(JSON.parse(token), JWT_SECRET_KEY);

    next();
  } catch (err) {
    res.status(403).send("Your token has expired or is invalid.");
  }
};

export default verifyUserLogin;
