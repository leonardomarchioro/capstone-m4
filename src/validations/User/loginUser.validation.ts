import * as yup from "yup";

const loginUserSchema = {
  schema: {
    body: {
      yupSchema: yup
        .object()
        .shape({
          email: yup.string().required("email is required"),
          password: yup.string().required("password is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default loginUserSchema;
