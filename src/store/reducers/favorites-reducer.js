import sixCitiesApi from '../../api/six-cities-api';

const SET_HOTELS = `favorites/setHotels`;
const SET_LOADED = `favorites/setLoaded`;
const SET_ERROR = `favorites/setError`;

const initialState = {
  hotels: [],
  loaded: false,
  error: {
    value: null,
    code: null
  }
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
        loaded: action.value
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: {
          value: action.value,
          code: action.code
        }
      };
    }
    default: {
      return state;
    }
  }
};

export const setHotels = (hotels) => ({type: SET_HOTELS, payload: hotels});
export const setLoaded = (value) => ({type: SET_LOADED, value});
export const setError = (value, code) => ({type: SET_ERROR, value, code});

export const loadHotels = () => (dispatch) => {
  dispatch(setLoaded(false));

  sixCitiesApi.getFavorites()
    .then((hotels) => {
      dispatch(setHotels(hotels));
      dispatch(setError(false, null));
    })
    .catch((err) => {
      dispatch(setHotels([]));
      dispatch(setError(true, err.code));
    })
    .finally(() => {
      dispatch(setLoaded(true));
    });
};

export default favorites;
