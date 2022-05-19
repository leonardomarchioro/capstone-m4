import { object, string } from "yup";

const updatePasswordSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          currentPassword: string().required("currentPassword is required"),
          newPassword: string().required("newPassword is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default updatePasswordSchema;
