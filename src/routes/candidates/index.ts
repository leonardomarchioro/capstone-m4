import { Router } from "express";
import candidateCreateController from "../../controllers/candidates/candidateCreate.controller";
import candidateDeleteController from "../../controllers/candidates/candidateDelete.controller";

const candidateRoutes = Router()

candidateRoutes.post("", candidateCreateController)
candidateRoutes.delete("/:jobId", candidateDeleteController)

export default candidateRoutes