import "express-async-errors";
import express from "express";
import candidateRoutes from "./routes/candidates";
import userRoutes from "./routes/user/user.routes";
import errorHandler from "./middlewares/errorHandler.middleware";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

app.use(express.json());

app.use("/user", userRoutes);

app.use("/candidate", candidateRoutes);

app.get("/", (req, res) => {
  return res.send("Hello world!!!!");
});

app.use(errorHandler);

export { app };
