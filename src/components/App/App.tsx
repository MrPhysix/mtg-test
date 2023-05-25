import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

import data from '../../utils/data/data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Main reviews={data} />
    </div>
  );
}

export default App;
