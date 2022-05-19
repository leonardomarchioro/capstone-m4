import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { Review } from "../../entities/Reviews/reviews.entity";

const reviewCreateService = async (
  jobId: string,
  score: number,
  comment: string | null
) => {
  const jobRepository = AppDataSource.getRepository(Job);
  const reviewRepository = AppDataSource.getRepository(Review);

  const reviewData = {
    score,
    comment,
  };

  const newReview = reviewRepository.create(reviewData);
  await reviewRepository.save(newReview);

  const job = await jobRepository.findOne({ where: { id: jobId } });

  job.review = newReview;

  await jobRepository.save(job);

  return newReview;
};

export default reviewCreateService;
