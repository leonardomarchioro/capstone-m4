export interface ICreateReview {
  score: number;
  comment?: string;
}

export interface IUpdateReview {
  score?: number;
  comment?: string;
}
