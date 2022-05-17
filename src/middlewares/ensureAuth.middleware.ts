import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const ensureAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({message: "Unauthorized"});
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({message: "Unauthorized"});
  }

  const secret = process.env.SECRET_KEY;

  const decoded = verify(token, secret, (err, decoded) => {
    if (!decoded) {
      return res.status(401).json({message: "Unauthorized"});
    }
  });

  const { userId } = <any>decoded;

  request.userId = userId;

  return next();
};
export default ensureAuth;
