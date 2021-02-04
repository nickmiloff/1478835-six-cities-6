import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import main from './reducers/main-reducer';
import favorites from './reducers/favorites-reducer';
import offer from './reducers/offer-reducer';

const reducers = combineReducers({
  main,
  favorites,
  offer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
