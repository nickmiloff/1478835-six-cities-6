import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {cardPropTypes} from '../../prop-types.prop';

const CITIES = {
  Amsterdam: [52.38333, 4.9]
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
      .marker(card.location, {icon: card.id === activeCardId ? ACTIVE_ICON : ICON})
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

const Map = ({activeLocation, cards, activeCardId}) => {
  const map = useRef();
  const currentCity = CITIES[activeLocation];

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
    removeMarkers(map.current);
    setMarkers(map.current, cards, activeCardId);
  }, [activeCardId]);

  return <div id="map" style={STYLE}></div>;
};

Map.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)),
  activeCardId: PropTypes.number
};

export default Map;
