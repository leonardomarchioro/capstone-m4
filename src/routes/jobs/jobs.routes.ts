import { Router } from "express";

import createJobController from "src/controllers/jobs/createJob.controller";

import listMyJobsController from "src/controllers/jobs/ListMyJobs.controller";
import listAllJobsController from "src/controllers/jobs/ListAvailableJobs.controller";
import listOneJobController from "src/controllers/jobs/listOneJob.controller";

import UpdateInfosJobController from "src/controllers/jobs/updateInfoJob.controller";
import updateCandidateJobController from "src/controllers/jobs/updateCandidateJob.controller";
import updateRemoveCandidateJobController from "src/controllers/jobs/updateRemoveCandidateJob.controller";
import updateFinishJobController from "src/controllers/jobs/updateFinishJob.controller";

import deleteJobController from "src/controllers/jobs/deleteJob.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";

const jobRoutes = Router();

jobRoutes.use(ensureAuth);

jobRoutes.post("/", createJobController);

jobRoutes.get("/me", listMyJobsController);
jobRoutes.get("/all", listAllJobsController);
jobRoutes.get("/:id", listOneJobController);

jobRoutes.patch("/:id", UpdateInfosJobController);

// jobRoutes.patch(":id/supplier", updateCandidateJobController);
// jobRoutes.patch("/:id/remove/supplier", updateRemoveCandidateJobController);

jobRoutes.patch("/:id/end", updateFinishJobController);

jobRoutes.delete("/:id", deleteJobController);

export default jobRoutes;
