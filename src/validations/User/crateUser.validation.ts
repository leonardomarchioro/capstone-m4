import * as yup from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: yup
        .object()
        .shape({
          name: yup.string().required("name is required"),
          email: yup
            .string()
            .required("email is required")
            .email("Invalid email format"),
          password: yup.string().required("password is required"),
          phone: yup.string().required("Phone is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default createUserSchema;
