import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '../services/api';
import mainReducer from './main/reducer';
import favoritesReducer from './favorites/reducer';
import offerReducer from './offer/reducer';
import appReducer from './app/reducer';
import {setAuth} from './app/actions';
import {redirect} from './middlewares/redirect';

const reducers = combineReducers({
  main: mainReducer,
  favorites: favoritesReducer,
  offer: offerReducer,
  app: appReducer
});

const api = createAPI(
    () => store.dispatch(setAuth(null))
);

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

export default store;
