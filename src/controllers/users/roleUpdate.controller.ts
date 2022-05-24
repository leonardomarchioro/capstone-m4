import { Request, Response } from "express";
import roleUpdateService from "../../services/users/roleUpdate.service";

const roleUpdateController = async (request: Request, response: Response) => {
  const { role } = request.body;
  const { userId } = request;

  await roleUpdateService(userId, role);

  return response.status(200).json({ message: "Role updated!" });
};

export default roleUpdateController;
