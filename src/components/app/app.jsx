import React from 'react';
import {Provider} from 'react-redux';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import store from '../../store/store';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {checkAuth} from '../../store/app/operations';
import {loadOffers} from '../../store/main/operations';

const ROUTES = {
  offer: `/offer`,
  favorites: `/favorites`,
  login: `/login`,
  main: `/`
};

const App = () => {
  store.dispatch(checkAuth());
  store.dispatch(loadOffers());

  return (
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={`${ROUTES.offer}/:id`} component={OfferPage} />
          <PrivateRoute exact path={ROUTES.favorites} component={FavoritesPage} />
          <Route exact path={ROUTES.login} component={LoginPage} />
          <Route exact path={ROUTES.main} component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

window.store = store;

export default App;
