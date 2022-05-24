import { Request, Response } from "express";
import userListAllSuppliers from "../../services/users/userListAllSuppliers.service";

const userListAllController = async (request: Request, response: Response) => {
  const userList = await userListAllSuppliers() || [];

  return response.status(200).json(userList);
};
export default userListAllController;
