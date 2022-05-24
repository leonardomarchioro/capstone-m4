import { string, object, number } from "yup";

const updateJobInfoSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string(),
          description: string(),
          categoryId: number(),
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
