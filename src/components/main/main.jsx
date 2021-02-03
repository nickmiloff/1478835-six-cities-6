import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Location from '../location/location';
import {loadHotels, setCity} from '../../store/reducers/main-reducer';
import {getCity, getHotels} from '../../store/selectors/main-selectors';
import Cities from '../cities/cities';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Main = ({activeCity, cards, updateHotels, changeCity}) => {
  useEffect(() => {
    updateHotels();
  }, [JSON.stringify(cards)]);

  return (
    <main className={`page__main page__main--index${cards.length === 0 && ` page__main--index-empty` || ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES_LIST.map((currentCity, index) => <Location activeCity={activeCity} currentCity={currentCity} changeCity={changeCity} key={index} />)}
          </ul>
        </section>
      </div>
      <Cities cards={cards} activeCity={activeCity}/>
    </main>
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
