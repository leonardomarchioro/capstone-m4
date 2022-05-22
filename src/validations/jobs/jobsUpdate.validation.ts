import { string, object } from "yup";

const updateJobInfoSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string(),
          description: string(),
          categoryId: string(),
          cep: string(),
          deliveryDate: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default updateJobInfoSchema;
