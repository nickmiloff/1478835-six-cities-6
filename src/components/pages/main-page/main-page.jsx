import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Locations from '../../locations/locations';
import {getCards, getLocation} from '../../../store/main/selectors';
import {setLocation} from '../../../store/main/actions';
import Cities from '../../cities/cities';

const MainPage = ({location, cards, changeLocation}) => {
  const isEmpty = !cards.length;

  return (
    <>
      <Header />
      <main className={`page__main page__main--index${isEmpty && ` page__main--index-empty` || ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeLocation={location} changeLocation={changeLocation} />
        </div>
        <Cities cards={cards} location={location} isEmpty={isEmpty} />
      </main>
    </>
  );
};

MainPage.propTypes = {
  location: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  changeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  location: getLocation(state),
  cards: getCards(state)
});

const mapDispatchToProps = {
  changeLocation: setLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
