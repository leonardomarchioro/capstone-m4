import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (request: Request, response: Response) => {
  const { name, email, phone } = request.body;
  const { userId } = request;

  console.log("service");

  const updatedUser = await userUpdateService(userId, {
    name,
    email,
    phone,
  });

  return response.status(200).json({ message: "Profile updated!" });
};

export default userUpdateController;
