import { Request, Response } from "express";
import listAllCategoriesService from "../../services/categoies/listAllCategories.service";

const listAllCategoriesController = async (
  reques: Request,
  response: Response
) => {
  const categories = await listAllCategoriesService();

  return response.status(200).json(categories);
};

export default listAllCategoriesController;
