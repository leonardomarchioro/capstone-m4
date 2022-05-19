import { Router } from "express";
import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";
import getAllCandidatesController from "../../controllers/candidates/getAllCandidates.controller";

const candidateRoutes = Router()

candidateRoutes.get("/:jobId", getAllCandidatesController)
candidateRoutes.post("/", candidateCreateController)
candidateRoutes.delete("/:jobId", candidateDeleteController)

export default candidateRoutes