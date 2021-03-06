import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
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

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setOffer, (state, action) => {
      state.offer = {...action.payload};
    })
    .addCase(actions.setNearby, (state, action) => {
      state.nearby = [...action.payload];
    })
    .addCase(actions.setReviews, (state, action) => {
      state.reviews = [...action.payload];
    })
    .addCase(actions.setLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.setReviewLoaded, (state, action) => {
      state.reviewLoaded = action.payload;
    })
    .addCase(actions.changeNearby, (state, action) => {
      const index = state.nearby.findIndex((card) => card.id === action.payload.id);
      state.nearby = [
        ...state.nearby.slice(0, index),
        action.payload,
        ...state.nearby.slice(index + 1)
      ];
    });
});

export default offerReducer;
export {
  initialState
};
