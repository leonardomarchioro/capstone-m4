import { Router } from "express";

import createReviewController from "src/controllers/reviews/createReview.controller";
import deleteReviewController from "src/controllers/reviews/deleteReview.controller";
import listReviewController from "src/controllers/reviews/listReview.controller";
import listReviewsSupplierController from "src/controllers/reviews/listReviewsSupplier.controller";
import updateReviewController from "src/controllers/reviews/updateReview.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";
import generalCheckReview from "src/middlewares/reviewsMiddlewares/generalCheckReview.middleware";
import verifyJobIsFinished from "src/middlewares/reviewsMiddlewares/verifyJobIsFinished.middleware";
import verifyIfExistsReview from "src/middlewares/reviewsMiddlewares/verifyIfExistsReview.middleware";

const reviewRouter = Router();

reviewRouter.use(ensureAuth);

reviewRouter.post(
  "/:idJob",
  verifyJobIsFinished,
  verifyIfExistsReview,
  generalCheckReview,
  createReviewController
);
reviewRouter.get("/:idJob", listReviewController);
reviewRouter.get("/supplier/:idSupplier", listReviewsSupplierController);
reviewRouter.patch("/:idReview", generalCheckReview, updateReviewController);
reviewRouter.delete("/:idReview", generalCheckReview, deleteReviewController);

export default reviewRouter;
