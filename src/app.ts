import express, { Request, Response, NextFunction } from "express";
import AppError from "./errors/appError";
import candidateRoutes from "./routes/candidates";
import userRoutes from "./routes/user/user.routes";
import "express-async-errors";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.use("/candidate", candidateRoutes);

app.get("/", (req, res) => {
  return res.send("Hello world!!!!");
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

export { app };
