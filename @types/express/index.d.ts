import { request } from "express";
import { IJobsReturn } from "src/interfaces/jobs";

export declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
