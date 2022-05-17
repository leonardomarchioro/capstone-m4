import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (request: Request, response: Response) => {
  const { name, email, phone } = request.body;
  const { userId } = request;

  const updatedUser = await userUpdateService(userId, {
    name,
    email,
    phone,
  });
};

export default userUpdateController;
