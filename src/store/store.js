import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import mainReducer from './main/reducer';
import favoritesReducer from './favorites/reducer';
import offerReducer from './offer/reducer';
import appReducer from './app/reducer';
import {setAuth} from './app/actions';
import {redirect} from './middlewares/redirect';

const api = createAPI(
    () => store.dispatch(setAuth(null))
);

const store = configureStore({
  reducer: {
    main: mainReducer,
    favorites: favoritesReducer,
    offer: offerReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});

export default store;
