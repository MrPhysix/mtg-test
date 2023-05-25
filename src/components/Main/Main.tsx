import React, { useState, useMemo } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { TReviews, TReview } from '../../types/reviews';
import styles from './main.module.css';
import PagesPagination from '../PagesPagination/PagesPagination';

function Main({ reviews }: { reviews: TReviews }) {
  const [currPage, setCurrPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);

  const reviewsArr: Array<TReview> = Object.values([reviews][0]);

  const lastReviewsIndex = useMemo(
    () => currPage * reviewsPerPage,
    [currPage, reviewsPerPage],
  );
  const firstReviewsIndex = useMemo(
    () => lastReviewsIndex - reviewsPerPage,
    [lastReviewsIndex, reviewsPerPage],
  );

  const currReviews = reviewsArr.slice(firstReviewsIndex, lastReviewsIndex);

  // handlers
  const handlePagination = (pageNumber: number): void => {
    setCurrPage(pageNumber);
  };

  const handleNextPage = (totalPages: number): void => {
    if (currPage === totalPages) return;
    setCurrPage((prev) => prev + 1);
  };

  const handlePrevPage = (): void => {
    if (currPage === 1) return;
    setCurrPage((prev) => prev - 1);
  };
  //
  return (
    <main className={styles.main}>
      <ul className={styles.ul}>
        {
          currReviews.map((item: TReview) => (
            <ReviewCard
              key={item.name}
              date={item.date}
              name={item.name}
              review={item.review}
            />
          ))
        }
      </ul>
      <PagesPagination
        totalCount={reviewsArr.length}
        itemPerPage={reviewsPerPage}
        handler={handlePagination}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currPage={currPage}
      />
    </main>
  );
}
export default Main;
