import { string, object } from "yup";

const createJobSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string().required("title is required"),
          description: string().required("description "),
          deliveryDate: string().required("deliveryDate is required"),
          cep: string().required("cep is required"),
          category: string().required("userId is required"),
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
