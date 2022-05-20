import { Router } from "express";

import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import listAllCandidacyController from "src/controllers/candidates/listAllCandidacy.controller";
import listAllCandidatesJobController from "../../controllers/candidates/lisAllCandidatesJob.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";

const candidateRoutes = Router();

candidateRoutes.use(ensureAuth);

candidateRoutes.post("/", candidateCreateController);

candidateRoutes.get("/job/:idJob", listAllCandidatesJobController);

candidateRoutes.get("/me", listAllCandidacyController);

candidateRoutes.delete("/job/:idJob", candidateDeleteController);

export default candidateRoutes;
