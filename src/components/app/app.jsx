import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MainPage from '../pages/main-page/main-page';

const App = ({cards}) => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainPage cards={cards} />
    </div>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired
};

export default App;
