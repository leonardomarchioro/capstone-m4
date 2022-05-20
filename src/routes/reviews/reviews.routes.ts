import { Router } from "express";
import createReviewController from "src/controllers/reviews/createReview.controller";

const reviewRouter = Router();

reviewRouter.post("/:idJob", createReviewController);

export default reviewRouter;
