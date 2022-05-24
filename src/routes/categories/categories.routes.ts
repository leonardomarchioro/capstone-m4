import { Router } from "express";
import listAllCategoriesController from "src/controllers/categories/listCategoies.controller";
import ensureAuth from "src/middlewares/ensureAuth.middleware";

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuth);

categoriesRoutes.get("/list", listAllCategoriesController);

export default categoriesRoutes;
