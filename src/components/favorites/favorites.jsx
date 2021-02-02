import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadHotels} from '../../store/reducers/favorites-reducer';
import {getHotels} from '../../store/selectors/favorites-selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesContainer from '../favorites-container/favorites-container';

const Favorites = ({cards, updateHotels}) => {
  useEffect(() => {
    updateHotels();
  }, [JSON.stringify(cards)]);

  return (
    <>
      <main className={`page__main page__main--favorites${cards.length === 0 && ` page__main--favorites-empty` || ``}`}>
        <div className="page__favorites-container container">
          {cards.length === 0 && <FavoritesEmpty /> || <FavoritesContainer cards={cards} />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
};

Favorites.propTypes = {
  cards: PropTypes.array.isRequired,
  updateHotels: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cards: getHotels(state)
});

const mapDispatchToProps = {
  updateHotels: loadHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
