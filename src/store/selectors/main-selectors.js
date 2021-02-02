import {createSelector} from 'reselect';

export const getCity = (store) => store.main.city;

export const getAllHotels = (store) => store.main.hotels;

export const getLoaded = (store) => store.main.loaded;

export const getError = (store) => store.main.error;

export const getHotels = createSelector(
    [getCity, getAllHotels],
    (city, hotels) => hotels.filter((hotel) => hotel.city.name === city)
);
