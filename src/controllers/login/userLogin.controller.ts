import { Request, Response } from "express";
import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const token = await userLoginService({ email, password });

  return response.status(200).json(token);
};

export default userLoginController;
