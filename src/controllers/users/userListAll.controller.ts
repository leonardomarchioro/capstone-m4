import { Request, Response } from "express";
import userListAllService from "../../services/users/userListAll.service";

const userListAllController = async (request: Request, response: Response) => {
  const userList = await userListAllService() || [];

  return response.status(200).json(userList);
};
export default userListAllController;
