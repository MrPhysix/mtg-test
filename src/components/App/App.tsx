import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { RootState } from '../../services';
import data from '../../utils/data/data.json';
import { TReviews } from '../../types/reviews';

interface TData { [key: string]: TReviews; }

function App() {
  const [reviews, setReviews] = useState({});
  const { language } = useSelector((state: RootState) => state.language);
  const typedData: TData = data;

  useEffect(() => {
    if (language) setReviews(typedData[language]);
  }, [language, data, typedData]);

  return (
    <div className="App">
      <Header />
      <Main reviews={reviews} />
    </div>
  );
}

export default App;
