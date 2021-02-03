import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import main from './reducers/main-reducer';
import favorites from './reducers/favorites-reducer';

const reducers = combineReducers({
  main,
  favorites
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
