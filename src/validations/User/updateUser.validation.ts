import * as yup from "yup";

const updateUserSchema = {
  schema: {
    body: {
      yupSchema: yup
        .object()
        .shape({
          name: yup.string(),
          email: yup.string().email("Invalid email format"),
          phone: yup.string(),
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
