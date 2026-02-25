export type TReview = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type TReviewContent = Omit<TReview, 'date' | 'user'>;

export type TReviews = TReview[];
