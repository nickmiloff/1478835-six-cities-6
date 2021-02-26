import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCards, getIsLoaded, getLocation} from '../../../store/main/selectors';
import {setLocation} from '../../../store/main/actions';
import Header from '../../header/header';
import Locations from '../../locations/locations';
import Cities from '../../cities/cities';
import withLoading from '../../../hocs/withLoading';

const MainPage = ({location, cards, changeLocation}) => {
  const isEmpty = !cards.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index${isEmpty && ` page__main--index-empty` || ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeLocation={location} changeLocation={changeLocation} />
        </div>
        <Cities cards={cards} location={location} isEmpty={isEmpty} />
      </main>
    </div>
  );
};

MainPage.propTypes = {
  location: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  changeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  location: getLocation(state),
  cards: getCards(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  changeLocation: setLocation
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)(MainPage);
