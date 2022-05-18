import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello world!!!!");
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export { app };
