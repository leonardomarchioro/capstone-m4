import { Router } from "express";
import reviewCreateController from "../../controllers/reviews/reviewCreate.controller";
import verifyReviewAlreadyExists from "../../middlewares/job/verifyReviewAlreadyExists.middleware";

const reviewRouter = Router();

reviewRouter.post(
  "/review/:jobId",
  verifyReviewAlreadyExists,
  reviewCreateController
);

export default reviewRouter;
