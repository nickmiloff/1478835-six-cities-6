import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCards} from '../../../store/favorites/selectors';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Favorites from '../../favorites/favorites';

const FavoritesPage = ({cards}) => {
  const isEmpty = !cards.length;

  return (
    <div className={`page${isEmpty && ` page--favorites-empty` || ``}`}>
      <Header />
      <main className={`page__main page__main--favorites${isEmpty && ` page__main--favorites-empty` || ``}`}>
        <div className="page__favorites-container container">
          {isEmpty
            && <FavoritesEmpty />
            || <Favorites cards={cards} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  cards: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  cards: getCards(state)
});

export default connect(mapStateToProps)(FavoritesPage);
