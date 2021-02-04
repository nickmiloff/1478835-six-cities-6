import sixCitiesApi from '../../api/six-cities-api';

const SET_HOTELS = `favorites/setHotels`;
const SET_LOADED = `favorites/setLoaded`;
const SET_ERROR = `favorites/setError`;

const initialState = {
  hotels: [],
  loaded: false,
  error: null
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS: {
      return {
        ...state,
        hotels: action.payload
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

export const setHotels = (hotels) => ({type: SET_HOTELS, payload: hotels});
export const setLoaded = (value) => ({type: SET_LOADED, payload: value});
export const setError = (error) => ({type: SET_ERROR, payload: error});

export const loadHotels = () => (dispatch) => {
  dispatch(setLoaded(false));

  sixCitiesApi.getFavorites()
    .then((hotels) => {
      dispatch(setHotels(hotels));
      dispatch(setError(null));
    })
    .catch((err) => {
      dispatch(setHotels([]));
      dispatch(setError(err));
    })
    .finally(() => {
      dispatch(setLoaded(true));
    });
};

export default favorites;
