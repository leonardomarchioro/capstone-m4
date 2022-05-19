import { string, object, boolean } from "yup";

const updateRoleSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          currentPassword: string().required("password is required"),
          role: boolean().required("role is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default updateRoleSchema;
