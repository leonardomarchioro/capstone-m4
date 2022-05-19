import { Router } from "express";
import reviewCreateController from "../../controllers/reviews/reviewCreate.controller";

const reviewRouter = Router();

reviewRouter.post("/review/:jobId", reviewCreateController);

export default reviewRouter;
