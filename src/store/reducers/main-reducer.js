import sixCitiesApi from '../../api/six-cities-api';

const SET_HOTELS = `main/setHotels`;
const SET_CITY = `main/setCity`;
const SET_TYPE = `main/setType`;
const SET_LOADED = `main/setLoaded`;
const SET_ERROR = `main/setError`;

const initialState = {
  hotels: [],
  city: `Paris`,
  type: `Popular`,
  loaded: false,
  error: null
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS: {
      return {
        ...state,
        hotels: action.payload
      };
    }
    case SET_CITY: {
      return {
        ...state,
        city: action.payload
      };
    }
    case SET_TYPE: {
      return {
        ...state,
        type: action.payload
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
    default:
      return state;
  }
};

export const setHotels = (hotels) => ({type: SET_HOTELS, payload: hotels});
export const setCity = (city) => ({type: SET_CITY, payload: city});
export const setType = (type) => ({type: SET_TYPE, payload: type});
export const setLoaded = (value) => ({type: SET_LOADED, payload: value});
export const setError = (error) => ({type: SET_ERROR, payload: error});

export const loadHotels = () => (dispatch) => {
  dispatch(setLoaded(false));

  sixCitiesApi.getHotels()
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

export default main;
