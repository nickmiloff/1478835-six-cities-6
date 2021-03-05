import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import store from './store/store';
import {checkAuth} from './store/app/operations';
import {loadOffers} from './store/main/operations';

store.dispatch(checkAuth());
store.dispatch(loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById(`root`)
);
