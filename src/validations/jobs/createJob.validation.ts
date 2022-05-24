import { string, object, number } from "yup";

const createJobSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string().required("title is required"),
          description: string().required("description id required"),
          deliveryDate: string().required("deliveryDate is required"),
          cep: string().required("cep is required"),
          categoryId: number().required("category is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default createJobSchema;
