import { Router } from "express";
import listAllCategoriesController from "../../controllers/categories/listCategoies.controller";
import ensureAuth from "../../middlewares/ensureAuth.middleware";

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuth);

categoriesRoutes.get("/list", listAllCategoriesController);

export default categoriesRoutes;
