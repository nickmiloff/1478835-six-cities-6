import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../card/card';
import Location from '../location/location';
import {loadHotels, setCity} from '../../store/reducers/main-reducer';
import {getCity, getHotels} from '../../store/selectors/main-selectors';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Main = ({activeCity, cards, updateHotels, changeCity}) => {
  useEffect(() => {
    updateHotels();
  }, [JSON.stringify(cards)]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES_LIST.map((currentCity, index) => <Location activeCity={activeCity} currentCity={currentCity} changeCity={changeCity} key={index} />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {cards.map((card, index) => <Card {...card} key={index} />)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  updateHotels: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: getCity(state),
  cards: getHotels(state)
});

const mapDispatchToProps = {
  updateHotels: loadHotels,
  changeCity: setCity
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
