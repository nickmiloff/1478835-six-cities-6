import sixCitiesApi from '../../api/six-cities-api';

const SET_HOTELS = `main/setHotels`;
const SET_CITY = `main/setCity`;
const SET_LOAD = `main/SET_LOAD`;
const SET_ERROR = `main/SET_ERROR`;

const initialState = {
  hotels: [],
  city: `Paris`,
  loaded: false,
  error: {
    value: null,
    code: null
  }
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
    case SET_LOAD: {
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
    default:
      return state;
  }
};

export const setHotels = (hotels) => ({type: SET_HOTELS, payload: hotels});
export const setCity = (city) => ({type: SET_CITY, payload: city});
export const setLoaded = (value) => ({type: SET_LOAD, value});
export const setError = (value, code) => ({type: SET_ERROR, value, code});

export const loadHotels = () => (dispatch) => {
  dispatch(setLoaded(false));

  sixCitiesApi.getHotels()
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

export default main;
