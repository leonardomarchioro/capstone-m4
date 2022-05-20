import { Router } from "express";
import jobsCreateController from "src/controllers/jobs/jobsCreate.controller";
import ensureAuth from "src/middlewares/ensureAuth.middleware";

const jobRoutes = Router();

jobRoutes.use(ensureAuth);

jobRoutes.post("/", jobsCreateController);

export default jobRoutes;
