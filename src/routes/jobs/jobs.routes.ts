import { Router } from "express";

import createJobController from "../../controllers/jobs/createJob.controller";

import listMyJobsController from "../../controllers/jobs/ListMyJobs.controller";
import listAllJobsController from "../../controllers/jobs/ListAvailableJobs.controller";
import listOneJobController from "../../controllers/jobs/listOneJob.controller";

import UpdateInfosJobController from "../../controllers/jobs/updateInfoJob.controller";
import updateCandidateJobController from "../../controllers/jobs/updateCandidateJob.controller";
import updateRemoveCandidateJobController from "../../controllers/jobs/updateRemoveCandidateJob.controller";
import updateFinishJobController from "../../controllers/jobs/updateFinishJob.controller";

import deleteJobController from "../../controllers/jobs/deleteJob.controller";

import ensureAuth from "../../middlewares/ensureAuth.middleware";
import verifyIsSupplier from "../../middlewares/candidateMiddlewares/verifyIsSupplier.middleware";
import verifyIsCandidate from "../../middlewares/jobsMiddlewares/verifyIsCandidate.middleware";

import { expressYupMiddleware } from "express-yup-middleware";
import createJobSchema from "../../validations/jobs/createJob.validation";
import updateJobInfoSchema from "../../validations/jobs/jobsUpdate.validation";
import updateCandidateJobSchema from "../../validations/jobs/updateCandidateJob.validation";
import verifyAlreadySupplier from "../../middlewares/jobsMiddlewares/verifyAlreadySupplier";
import verifyAlreadyStarted from "../../middlewares/jobsMiddlewares/verifyJobAlredyStarted";
import verifyJobAlreadyUpToFinish from "../../middlewares/jobsMiddlewares/verifyJobAlredyUpToFinish";

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
  verifyAlreadyStarted,
  UpdateInfosJobController
);

jobRoutes.patch(
  "/:jobId/supplier",
  expressYupMiddleware({ schemaValidator: updateCandidateJobSchema }),
  verifyAlreadySupplier,
  verifyIsCandidate,
  updateCandidateJobController
);

jobRoutes.patch("/:id/remove/supplier", updateRemoveCandidateJobController);

jobRoutes.patch(
  "/:jobId/end",
  verifyJobAlreadyUpToFinish,
  updateFinishJobController
);

jobRoutes.delete("/:id", deleteJobController);

export default jobRoutes;
