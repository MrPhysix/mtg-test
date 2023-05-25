export type TReview = {
  date: string,
  name: string,
  review: string
}

export type TReviews = {
  [key: string]: TReview
}
