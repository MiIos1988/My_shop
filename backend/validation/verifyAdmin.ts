import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      let decode = jwt.decode(JSON.parse(token));
      decode && next();
    }
  } catch (err) {
    res.status(403).send("Your token has expired or is invalid.");
  }
};

export default verifyAdmin;
