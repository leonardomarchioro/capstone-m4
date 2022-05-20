import { Router } from "express";
import createReviewController from "src/controllers/reviews/createReview.controller";
import listReviewController from "src/controllers/reviews/listReviewController";
import ensureAuth from "src/middlewares/ensureAuth.middleware";

const reviewRouter = Router();

reviewRouter.use(ensureAuth);

reviewRouter.post("/:idJob", createReviewController);
reviewRouter.get("/:idJob", listReviewController);

export default reviewRouter;
