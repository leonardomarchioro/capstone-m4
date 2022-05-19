import { Router } from "express";
import listAllCategoriesController from "../../controllers/categories/getAllCategories.controller";

const categoriesRoutes = Router()

categoriesRoutes.get("", listAllCategoriesController)

export default categoriesRoutes