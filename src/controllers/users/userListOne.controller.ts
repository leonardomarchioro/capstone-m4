import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (request: Request, response: Response) => {
  const { userId } = request;

  const user = await userListOneService({ userId });

  return response.status(200).json(user);
};

export default userListOneController;
