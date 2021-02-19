import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import mainReducer from './main/reducer';

const reducers = combineReducers({
  main: mainReducer
});

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;
