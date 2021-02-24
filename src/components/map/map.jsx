import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {cardPropTypes} from '../../prop-types.prop';

const MAP_TYPES = {
  main: `cities__map`,
  offer: `property__map`
};

const CITIES = {
  Amsterdam: [52.3833, 4.9044],
  Paris: [48.8589, 2.3469],
  Cologne: [50.9293, 6.9595],
  Brussels: [50.8552, 4.3453],
  Hamburg: [53.5503, 10.0006],
  Dusseldorf: [51.2287, 6.7743]
};

const STYLE = {
  width: `100%`,
  height: `100%`
};

const INITIAL_SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true
};

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

const setMarkers = (map, cards, activeCardId) => {
  cards.forEach((card) => {
    leaflet
      .marker({
        lat: card.location.latitude,
        lon: card.location.longitude
      }, {icon: card.id === activeCardId ? ACTIVE_ICON : ICON})
      .addTo(map);
  });
};

const removeMarkers = (map) => {
  map.eachLayer(function (layer) {
    if (layer instanceof leaflet.Marker) {
      layer.remove();
    }
  });
};

const Map = ({activeLocation, cards, activeCardId, type}) => {
  const map = useRef();
  const currentCity = CITIES[activeLocation];
  const currentType = MAP_TYPES[type];

  useEffect(() => {
    map.current = leaflet.map(`map`, {
      center: currentCity,
      ...INITIAL_SETTINGS
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map.current);

    setMarkers(map.current, cards, activeCardId);

    return () => {
      map.current.remove();
    };
  }, []);

  useEffect(() => {
    map.current.flyTo(new leaflet.LatLng(...currentCity), INITIAL_SETTINGS.zoom);
    removeMarkers(map.current);
    setMarkers(map.current, cards, activeCardId);
  }, [JSON.stringify(cards)]);

  useEffect(() => {
    removeMarkers(map.current);
    setMarkers(map.current, cards, activeCardId);
  }, [activeCardId]);

  return (
    <section className={`${currentType} map`}>
      <div id="map" style={STYLE} ref={map}></div>
    </section>
  );
};

Map.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)),
  activeCardId: PropTypes.number,
  type: PropTypes.string.isRequired
};

export default Map;
