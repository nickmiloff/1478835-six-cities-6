import * as types from './types';

export const setCards = (cards) => ({type: types.SET_CARDS, payload: cards});
export const setLoaded = (loaded) => ({type: types.SET_LOADED, payload: loaded});
export const changeCard = (card) => ({type: types.CHANGE_CARD, payload: card});
