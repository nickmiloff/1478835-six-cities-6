import * as types from './types';

export const setOffer = (offer) => ({type: types.SET_OFFER, payload: offer});
export const setNearby = (nearby) => ({type: types.SET_NEARBY, payload: nearby});
export const setReviews = (reviews) => ({type: types.SET_REVIEWS, payload: reviews});
export const setLoaded = (loaded) => ({type: types.SET_LOADED, payload: loaded});
