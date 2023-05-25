import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services';
import ReviewCard from '../ReviewCard/ReviewCard';
import { TReviews } from '../../types/reviews';
import styles from './main.module.css';

type TProps = {
  [key: string] : TReviews
}

const mock = {
  date: '16.01.2021',
  name: 'Иванова Елена',
  review: 'I really liked the quality of the product, I will order more.',
};

function Main({ reviews }: {reviews: TProps}) {
  const { language } = useSelector((state: RootState) => state.language);
  // eslint-disable-next-line
  console.log("reviews", reviews);
  // eslint-disable-next-line
  console.log('language', language);

  return (
    <main className={styles.main}>
      <ul className={styles.ul}>
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
        <ReviewCard date={mock.date} name={mock.name} review={mock.review} />
      </ul>
    </main>
  );
}

export default Main;
