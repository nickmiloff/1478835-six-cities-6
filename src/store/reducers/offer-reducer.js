import sixCitiesApi from '../../api/six-cities-api';

const SET_OFFER = `offer/setOffer`;
const SET_LOADED = `offer/setLoaded`;
const SET_ERROR = `offer/setError`;

const initialState = {
  offer: {},
  loaded: false,
  error: null
};

const offer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFER: {
      return {
        ...state,
        offer: action.payload
      };
    }
    case SET_LOADED: {
      return {
        ...state,
        loaded: action.payload
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export const setOffer = (off) => ({type: SET_OFFER, payload: off});
export const setLoaded = (value) => ({type: SET_LOADED, payload: value});
export const setError = (error) => ({type: SET_ERROR, payload: error});

export const loadOffer = (id) => (dispatch) => {
  dispatch(setLoaded(false));
  sixCitiesApi.getHotel(id)
    .then((off) => {
      dispatch(setOffer(off));
      dispatch(setError(false, null));
    })
    .catch((err) => {
      dispatch(setOffer({}));
      dispatch(setError(err));
    })
    .finally(() => {
      dispatch(setLoaded(true));
    });
};

export default offer;
