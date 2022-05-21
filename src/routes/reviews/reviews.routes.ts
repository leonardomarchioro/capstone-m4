import { Router } from "express";

import createReviewController from "src/controllers/reviews/createReview.controller";
import deleteReviewController from "src/controllers/reviews/deleteReview.controller";
import listReviewController from "src/controllers/reviews/listReview.controller";
import listReviewsSupplierController from "src/controllers/reviews/listReviewsSupplier.controller";
import updateReviewController from "src/controllers/reviews/updateReview.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";

const reviewRouter = Router();

reviewRouter.use(ensureAuth);

reviewRouter.post("/:idJob", createReviewController);
reviewRouter.get("/:idJob", listReviewController);
reviewRouter.patch("/:idReview", updateReviewController);
reviewRouter.delete("/:idReview", deleteReviewController);
reviewRouter.get("/:idSupplier", listReviewsSupplierController);

export default reviewRouter;
