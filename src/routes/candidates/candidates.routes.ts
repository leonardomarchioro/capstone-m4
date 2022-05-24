import { Router } from "express";

import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import listAllCandidacyController from "../../controllers/candidates/listAllCandidacy.controller";
import listAllCandidatesJobController from "../../controllers/candidates/lisAllCandidacyJob.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";

import ensureAuth from "../../middlewares/ensureAuth.middleware";
import verifyOwnJob from "../../middlewares/candidateMiddlewares/verifyOwnJobId.middleware";
import verifyIsSupplier from "../../middlewares/verifyIsSupplier.middleware";
import verifyCandidateNotExists from "../../middlewares/candidateMiddlewares/verifyCandidateNotExists";
import verifyJobExists from "../../middlewares/candidateMiddlewares/verifyJobExists";
import createCandidateJobSchema from "../../validations/candidate/createCandidate.valiation";
import { expressYupMiddleware } from "express-yup-middleware";

const candidateRoutes = Router();

candidateRoutes.use(ensureAuth);

candidateRoutes.post(
  "/",
  expressYupMiddleware({ schemaValidator: createCandidateJobSchema }),
  verifyJobExists,
  verifyCandidateNotExists,
  verifyIsSupplier,
  verifyOwnJob,
  candidateCreateController
);

candidateRoutes.get("/job/:idJob", listAllCandidatesJobController);

candidateRoutes.get("/me", verifyIsSupplier, listAllCandidacyController);

candidateRoutes.delete(
  "/job/:idJob",
  verifyJobExists,
  verifyIsSupplier,
  candidateDeleteController
);

export default candidateRoutes;
