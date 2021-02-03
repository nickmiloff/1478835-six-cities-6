import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Main from '../main/main';

const App = ({cards}) => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main cards={cards} />
    </div>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired
};

export default App;
