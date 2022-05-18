import { Router } from "express";

import userLoginController from "../../controllers/login/userLogin.controller";
import userDeleteController from "../../controllers/users/deleteUser.controller";
import passwordUpdateController from "../../controllers/users/passwordUpdate.controller";
import roleUpdateController from "../../controllers/users/roleUpdate.controller";
import userCreateController from "../../controllers/users/userCreate.controller";
import userListAllSuppliersController from "../../controllers/users/userListAllSuppliers.controller";
import userListOneController from "../../controllers/users/userListOne.controller";
import userUpdateController from "../../controllers/users/userUpdate.controller";

import ensureAuth from "../../middlewares/ensureAuth.middleware";
import verifyDuplicatedEmail from "../../middlewares/verifyDuplicatedEmail.middleware";
import verifyPassword from "../../middlewares/verifyPassword.middleware";

import { expressYupMiddleware } from "express-yup-middleware";

import createUserSchema from "../../validations/User/crateUser.validation";

const userRoutes = Router();

userRoutes.post(
  "/signup",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  verifyDuplicatedEmail,
  userCreateController
);
userRoutes.post("/signin", userLoginController);

userRoutes.use(ensureAuth);

userRoutes.get("/me", userListOneController);
userRoutes.get("/suppliers", userListAllSuppliersController);

userRoutes.patch("/me", userUpdateController);
userRoutes.patch("/password", verifyPassword, passwordUpdateController);
userRoutes.patch("/role", verifyPassword, roleUpdateController);

userRoutes.delete("/me", userDeleteController);

export default userRoutes;
