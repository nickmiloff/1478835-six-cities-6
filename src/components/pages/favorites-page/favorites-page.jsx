import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FavoritesLocation from '../../favorites-location/favorites-location';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const FavoritesPage = ({cards}) => {
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                CITIES_LIST.map(
                    (city, index) => {
                      const filteredCards = cards.filter((card) => card.city.name === city);
                      return filteredCards.length < 1 ? `` : <FavoritesLocation city={city} cards={filteredCards} key={index} />;
                    })
              }
            </ul>
          </section>
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

FavoritesPage.propTypes = {
  cards: PropTypes.array.isRequired
};

export default FavoritesPage;
