import { string, object, number } from "yup";

const updateReviewSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          score: string().matches(
            /^([1-5])$/,
            "choose a number between 1 and 5"
          ),
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

export default updateReviewSchema;
