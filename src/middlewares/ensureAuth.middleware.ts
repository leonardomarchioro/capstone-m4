import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const ensureAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return "JWT is missing";
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return "Token is missing";
  }

  const secret = process.env.SECRET_KEY || "default";

  const decoded = verify(token, secret, (err, decoded) => {
    if (!decoded) {
      return "Invalid token";
    }
  });

  const { userId } = <any>decoded;

  request.userId = userId;

  return next();
};
export default ensureAuth;
