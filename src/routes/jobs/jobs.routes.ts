import { Router } from "express";

import jobsCreateController from "src/controllers/jobs/jobsCreate.controller";
import jobDeleteController from "src/controllers/jobs/jobsDelete.controller";
import listAllJobsController from "src/controllers/jobs/jobsListAll.controller";
import listMeJobsController from "src/controllers/jobs/jobsListMe.controller";
import listJobController from "src/controllers/jobs/jobsListOne.controller";
import UpdateJobInfoController from "src/controllers/jobs/jobsUpdate.controller";
import updateJobCandidateController from "src/controllers/jobs/jobsUpdateCandidate.controller";
import updateJobRemoveCandidateController from "src/controllers/jobs/jobsUpdateRemoveCandidate.controller";
import updateJobTypeCandidateController from "src/controllers/jobs/jobsUpdateType.controller";

import ensureAuth from "src/middlewares/ensureAuth.middleware";

const jobRoutes = Router();

jobRoutes.use(ensureAuth);

jobRoutes.post("/", jobsCreateController);

jobRoutes.get("/me", listMeJobsController);
jobRoutes.get("/all", listAllJobsController);
jobRoutes.get("/:id", listJobController);

jobRoutes.patch("/:id", UpdateJobInfoController);
jobRoutes.patch(":id/supplier", updateJobCandidateController);
jobRoutes.patch("/:id/remove/supplier", updateJobRemoveCandidateController);
jobRoutes.patch("/:id/end", updateJobTypeCandidateController);

jobRoutes.delete("/:id", jobDeleteController);

export default jobRoutes;
