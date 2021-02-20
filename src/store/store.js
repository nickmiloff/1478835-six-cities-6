import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import mainReducer from './main/reducer';
import favoritesReducer from './favorites/reducer';
import offerReducer from './offer/reducer';

const reducers = combineReducers({
  main: mainReducer,
  favorites: favoritesReducer,
  offer: offerReducer
});

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;
