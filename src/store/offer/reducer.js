import * as types from './types';
import {Statuses} from '../../services/load-statuses';

const initialState = {
  offer: {
    images: [],
    previewImage: ``,
    isPremium: false,
    title: ``,
    isFavorite: false,
    rating: 0,
    type: ``,
    bedrooms: 0,
    maxAdults: 0,
    price: 0,
    goods: [],
    host: {
      avatarUrl: ``,
      id: 0,
      isPro: true,
      name: ``,
    },
    description: ``,
    id: 0,
    location: {
      latitude: 52.3833,
      longitude: 4.9044,
      zoom: 8,
    },
  },
  nearby: [],
  reviews: [],
  loaded: Statuses.PENDING,
  reviewLoaded: Statuses.PENDING
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OFFER:
      return {
        ...state,
        offer: {...action.payload}
      };

    case types.SET_NEARBY:
      return {
        ...state,
        nearby: [...action.payload]
      };

    case types.SET_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload]
      };

    case types.SET_LOADED:
      return {
        ...state,
        loaded: action.payload
      };

    case types.SET_REVIEW_LOADED:
      return {
        ...state,
        reviewLoaded: action.payload
      };

    case types.CHANGE_NEARBY:
      const index = state.nearby.findIndex((card) => card.id === action.payload.id);

      return {
        ...state,
        nearby: [
          ...state.nearby.slice(0, index),
          action.payload,
          ...state.nearby.slice(index + 1)
        ]
      };

    default:
      return state;
  }
};

export default offerReducer;
