import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { errorHandler } from "./error";

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token = req?.cookies?.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY!, (err: any, user: any) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
