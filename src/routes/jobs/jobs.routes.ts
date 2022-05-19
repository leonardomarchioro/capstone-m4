import { Router } from "express";
import jobsCreateController from "../../controllers/jobs/jobsCreate.controller";
import listAllJobsController from "../../controllers/jobs/jobsListAll.controller";
import listMeJobsController from "../../controllers/jobs/jobsListMe.controller";
import listOneJobController from "../../controllers/jobs/jobsListOne.controller";
import ensureAuth from "../../middlewares/ensureAuth.middleware";

const jobsRoutes = Router();

jobsRoutes.use(ensureAuth);

jobsRoutes.post("/", jobsCreateController);

jobsRoutes.get("/", listAllJobsController);
jobsRoutes.get("/me", listMeJobsController);
jobsRoutes.get("/:id", listOneJobController);

export default jobsRoutes;
