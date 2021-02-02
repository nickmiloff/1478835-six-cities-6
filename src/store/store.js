import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import main from './reducers/main-reducer';

const reducers = combineReducers({
  main
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
