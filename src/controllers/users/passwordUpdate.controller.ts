import { Request, Response } from "express";
import passwordUpdateService from "../../services/users/passwordUpdate.service";

const passwordUpdateController = async (
  request: Request,
  response: Response
) => {
  const { new_password } = request.body;
  const { userId } = request;

  await passwordUpdateService({ userId, new_password });

  return response.status(200).json({ message: "Password updated!" });
};

export default passwordUpdateController;
