import { Router } from "express";
import jobsCreateController from "../../controllers/jobs/jobsCreate.controller";
import listAllJobsController from "../../controllers/jobs/jobsListAll.controller";

const jobsRoutes = Router();

jobsRoutes.post("/", jobsCreateController);

jobsRoutes.get("/", listAllJobsController);

export default jobsRoutes;
