import * as yup from "yup";

const updatePasswordSchema = {
  schema: {
    body: {
      yupSchema: yup
        .object()
        .shape({
          currentPassword: yup.string().required("currentPassword is required"),
          newPassword: yup.string().required("newPassword is required"),
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
