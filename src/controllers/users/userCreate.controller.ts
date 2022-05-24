import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (request: Request, response: Response) => {
  const { name, email, password, phone } = request.body;

  const newUser = await userCreateService({ name, email, password, phone });

  return response.status(201).json(newUser);
};

export default userCreateController;
