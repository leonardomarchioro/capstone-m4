import { Request, Response } from "express";
import userDeleteService from "../../services/users/deleteUser.service";

const userDeleteController = async (request: Request, response: Response) => {
  const { userId } = request;

  await userDeleteService(userId);

  return response.status(200).json({ message: "User deleted!" });
};

export default userDeleteController;
