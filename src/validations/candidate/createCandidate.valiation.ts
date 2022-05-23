import { string, object } from "yup";

const createCandidateJobSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          jobId: string().required("job id is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default createCandidateJobSchema;
