import { string, object, number } from "yup";

const createReviewSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          score: string()
            .required("job id is required")
            .matches(/^([1-5])$/, "choose a number between 1 and 5"),
          comment: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export default createReviewSchema;
