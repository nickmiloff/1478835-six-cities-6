import * as types from "./types";

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
  loaded: false
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

    default:
      return state;
  }
};

export default offerReducer;
