import { string, object } from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string().required("name is required"),
          email: string()
            .required("email is required")
            .email("Invalid email format"),
          password: string().required("password is required"),
          phone: string().required("Phone is required"),
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
