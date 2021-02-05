import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesLocation from '../../favorites-location/favorites-location';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const FavoritesPage = ({cards}) => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

FavoritesPage.propTypes = {
  cards: PropTypes.array.isRequired
};

export default FavoritesPage;
