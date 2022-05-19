import { Router } from "express";
import jobsCreateController from "../../controllers/jobs/jobsCreate.controller";

const jobsRoutes = Router();

jobsRoutes.post("/", jobsCreateController);

export default jobsRoutes;
