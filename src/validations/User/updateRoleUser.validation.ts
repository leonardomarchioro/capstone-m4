import * as yup from "yup";

const updateRoleSchema = {
  schema: {
    body: {
      yupSchema: yup
        .object()
        .shape({
          currentPassword: yup.string().required("password is required"),
          role: yup.boolean().required("role is required"),
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
