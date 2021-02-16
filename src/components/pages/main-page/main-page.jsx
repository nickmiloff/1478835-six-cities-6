import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Locations from '../../locations/locations';
import CardsList from '../../cards-list/cards-list';
import PlacesSorting from '../../places-sorting/places-sorting';
import Map from '../../map/map';

const MainPage = ({cards}) => {
  const [sortingType, setSortingType] = useState(`Popular`);
  const [location, setLocation] = useState(`Amsterdam`);
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeLocation={location} changeLocation={setLocation} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in Amsterdam</b>
              <PlacesSorting activeOption={sortingType} changeOption={setSortingType} />
              <CardsList cards={cards} cardType="main" chnageActiveCardId={setActiveCardId} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cards={cards} activeLocation={location} activeCardId={activeCardId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

MainPage.propTypes = {
  cards: PropTypes.array.isRequired
};

export default MainPage;
