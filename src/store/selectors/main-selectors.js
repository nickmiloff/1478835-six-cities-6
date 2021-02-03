import {createSelector} from 'reselect';

export const getCity = (store) => store.main.city;

export const getType = (store) => store.main.type;

export const getAllHotels = (store) => store.main.hotels;

export const getLoaded = (store) => store.main.loaded;

export const getError = (store) => store.main.error;

export const getHotels = createSelector(
    [getCity, getAllHotels, getType],
    (city, hotels, type) => {
      const suitableHotels = hotels.filter((hotel) => hotel.city.name === city);

      switch (type) {
        case `Price: high to low`: {
          return suitableHotels.sort((a, b) => b.price - a.price);
        }
        case `Price: low to high`: {
          return suitableHotels.sort((a, b) => a.price - b.price);
        }
        case `Top rated first`: {
          return suitableHotels.sort((a, b) => b.rating - a.rating);
        }
        default: {
          return suitableHotels;
        }
      }
    }
);
