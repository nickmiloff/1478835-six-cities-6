import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import Map from '../map/map';

const Cities = ({cards, location, isEmpty}) => {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="cities">
      <div className={`cities__places-container container${isEmpty && ` cities__places-container--empty` || ``}`}>
        {isEmpty
          && <PlacesEmpty location={location} />
          || <Places cards={cards} location={location} setActiveCardId={setActiveCardId} />}
        <div className="cities__right-section">
          {!isEmpty
            && <Map cards={cards} activeLocation={location} activeCardId={activeCardId} type="main" />
            || ``}
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  location: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool.isRequired
};

export default Cities;
