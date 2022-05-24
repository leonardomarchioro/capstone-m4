import { Router } from "express";

import createReviewController from "../../controllers/reviews/createReview.controller";
import deleteReviewController from "../../controllers/reviews/deleteReview.controller";
import listReviewController from "../../controllers/reviews/listReview.controller";
import listReviewsSupplierController from "../../controllers/reviews/listReviewsSupplier.controller";
import updateReviewController from "../../controllers/reviews/updateReview.controller";

import ensureAuth from "../../middlewares/ensureAuth.middleware";
import generalCheckReview from "../../middlewares/reviewsMiddlewares/generalCheckReview.middleware";
import verifyJobIsFinished from "../../middlewares/reviewsMiddlewares/verifyJobIsFinished.middleware";
import verifyIfExistsReview from "../../middlewares/reviewsMiddlewares/verifyIfExistsReview.middleware";
import createReviewSchema from "../../validations/review/createReview.validation";
import { expressYupMiddleware } from "express-yup-middleware";
import updateReviewSchema from "../../validations/review/updateReviewSchema";

const reviewRouter = Router();

reviewRouter.use(ensureAuth);

reviewRouter.post(
  "/:idJob",
  expressYupMiddleware({ schemaValidator: createReviewSchema }),
  verifyJobIsFinished,
  verifyIfExistsReview,
  generalCheckReview,
  createReviewController
);
reviewRouter.get("/:idJob", listReviewController);
reviewRouter.get("/supplier/:idSupplier", listReviewsSupplierController);

reviewRouter.patch(
  "/:idReview",
  expressYupMiddleware({ schemaValidator: updateReviewSchema }),
  generalCheckReview,
  updateReviewController
);
reviewRouter.delete("/:idReview", generalCheckReview, deleteReviewController);

export default reviewRouter;
