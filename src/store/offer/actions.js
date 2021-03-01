import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setOffer = createAction(types.SET_OFFER, (offer) => {
  return {
    payload: offer
  };
});

export const setNearby = createAction(types.SET_NEARBY, (nearby) => {
  return {
    payload: nearby
  };
});

export const setReviews = createAction(types.SET_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const setLoaded = createAction(types.SET_LOADED, (loaded) => {
  return {
    payload: loaded
  };
});

export const setReviewLoaded = createAction(types.SET_REVIEW_LOADED, (loaded) => {
  return {
    payload: loaded
  };
});

export const changeNearby = createAction(types.CHANGE_NEARBY, (card) => {
  return {
    payload: card
  };
});
