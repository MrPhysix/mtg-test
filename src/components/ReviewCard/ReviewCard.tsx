import React from 'react';
import { TReview } from '../../types/reviews';
import styles from './review-card.module.css';

function ReviewCard({ date, name, review }: TReview) {
  return (
    <li className={styles.card}>
      <h2 className={styles.h2}>{name}</h2>
      <p className={styles.data}>{date}</p>
      <p className={styles.review}>{review}</p>
    </li>
  );
}

export default ReviewCard;
