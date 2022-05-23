import { Router } from "express";

import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import listAllCandidacyController from "src/controllers/candidates/listAllCandidacy.controller";
import listAllCandidatesJobController from "../../controllers/candidates/lisAllCandidatesJob.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";
import verifyOwnJob from "src/middlewares/candidateMiddlewares/verifyOwnJobId.middleware";
import verifyIsSupplier from "src/middlewares/verifyIsSupplier.middleware";
import verifyCandidateNotExists from "src/middlewares/candidateMiddlewares/verifyCandidateNotExists";

const candidateRoutes = Router();

candidateRoutes.use(ensureAuth);

candidateRoutes.post(
  "/",
  verifyCandidateNotExists,
  verifyIsSupplier,
  //verifyOwnJob,
  candidateCreateController
);

candidateRoutes.get("/job/:idJob", listAllCandidatesJobController);

candidateRoutes.get("/me", verifyIsSupplier, listAllCandidacyController);

candidateRoutes.delete(
  "/job/:idJob",
  verifyIsSupplier,
  candidateDeleteController
);

export default candidateRoutes;
