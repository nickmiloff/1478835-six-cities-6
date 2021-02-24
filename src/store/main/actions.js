import * as types from './types';

export const setLocation = (location) => ({type: types.SET_LOCATION, payload: location});
export const setCards = (cards) => ({type: types.SET_CARDS, payload: cards});
export const setType = (type) => ({type: types.SET_TYPE, payload: type});
export const setLoaded = (loaded) => ({type: types.SET_LOADED, payload: loaded});
