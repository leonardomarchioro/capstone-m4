import "express-async-errors";
import express from "express";
// import candidateRoutes from "./routes/candidates";
import userRoutes from "./routes/user/user.routes";
import errorHandler from "./middlewares/errorHandler.middleware";
import jobRoutes from "./routes/jobs/jobs.routes";
import reviewRouter from "./routes/reviews/reviews.routes";
import swaggerUi from "swagger-ui-express";

const app = express();

import swaggerDocs from "./swagger.json";

app.use(express.json());

app.use("/user", userRoutes);
app.use("/job", jobRoutes);
app.use("/review", reviewRouter);
// app.use("/candidate", candidateRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  return res.send("Hello world!!!!");
});

app.use(errorHandler);

export { app };
