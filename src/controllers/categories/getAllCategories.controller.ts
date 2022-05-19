import { Request, Response } from "express";
import listAllCategoriesService from "../../services/categories/getAllCategories.service";

const listAllCategoriesController = async (
  request: Request,
  response: Response
) => {
  const categoriesList = (await listAllCategoriesService()) || [];

  return response.status(200).json(categoriesList);
};
export default listAllCategoriesController;
