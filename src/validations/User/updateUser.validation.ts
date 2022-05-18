import { object, string } from "yup";

const updateUserSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string(),
          email: string().email("Invalid email format"),
          phone: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default updateUserSchema;
