import { string, object } from "yup";

const updateCandidateJobSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          supplierId: string().required("supplier id required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default updateCandidateJobSchema;
