import "express-async-errors"
import express from "express";
import candidateRoutes from "./routes/candidates";
import userRoutes from "./routes/user/user.routes";
import errorHandler from "./middlewares/errorHandler.middleware";
import categoriesRoutes from "./routes/categories";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.use("/candidate", candidateRoutes);

app.use("/categories", categoriesRoutes);

app.get("/", (req, res) => {
  return res.send("Hello world!!!!");
});

app.use(errorHandler);

export { app };
