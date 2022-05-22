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
import verifyIsSupplier from "src/middlewares/jobsMiddlewares/verifyIsSupplier.middleware";
import { expressYupMiddleware } from "express-yup-middleware";

import createJobSchema from "src/validations/jobs/createJob.validation";
import updateJobInfoSchema from "src/validations/jobs/jobsUpdate.validation";
import updateCandidateJobSchema from "src/validations/jobs/updateCandidateJob.validation";

const jobRoutes = Router();

jobRoutes.use(ensureAuth);

jobRoutes.post(
  "/",
  expressYupMiddleware({ schemaValidator: createJobSchema }),
  createJobController
);

jobRoutes.get("/me", listMyJobsController);
jobRoutes.get("/all", verifyIsSupplier, listAllJobsController);
jobRoutes.get("/one/:jobId", listOneJobController);

jobRoutes.patch(
  "/:id",
  expressYupMiddleware({ schemaValidator: updateJobInfoSchema }),
  UpdateInfosJobController
);

jobRoutes.patch(
  "/:jobId/supplier",
  expressYupMiddleware({ schemaValidator: updateCandidateJobSchema }),
  updateCandidateJobController
);

jobRoutes.patch("/:id/remove/supplier", updateRemoveCandidateJobController);

jobRoutes.patch("/:id/end", updateFinishJobController);

jobRoutes.delete("/:id", deleteJobController);

export default jobRoutes;
