import { Router } from "express";

import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import listAllCandidacyController from "src/controllers/candidates/listAllCandidacy.controller";
import listAllCandidatesJobController from "../../controllers/candidates/lisAllCandidacyJob.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";
import verifyOwnJob from "src/middlewares/candidateMiddlewares/verifyOwnJobId.middleware";
import verifyIsSupplier from "src/middlewares/verifyIsSupplier.middleware";
import verifyCandidateNotExists from "src/middlewares/candidateMiddlewares/verifyCandidateNotExists";
import verifyJobExists from "src/middlewares/candidateMiddlewares/verifyJobExists";
import createCandidateJobSchema from "src/validations/candidate/createCandidate.valiation";
import { expressYupMiddleware } from "express-yup-middleware";

const candidateRoutes = Router();

candidateRoutes.use(ensureAuth);

candidateRoutes.post(
  "/",
  expressYupMiddleware({ schemaValidator: createCandidateJobSchema }),
  verifyJobExists,
  verifyCandidateNotExists,
  verifyIsSupplier,
  //verifyOwnJob, /* Apenas para testes manuais ( lembrar de abilitar novamente nos testes com jest ) */
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
