import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

export const ROUTES = {
  offer: `/offer`,
  favorites: `/favorites`,
  login: `/login`,
  main: `/`
};

const App = () => {
  return (
    <Switch>
      <Route exact path={`${ROUTES.offer}/:id`} component={OfferPage} />
      <PrivateRoute exact path={ROUTES.favorites} component={FavoritesPage} />
      <Route exact path={ROUTES.login} component={LoginPage} />
      <Route exact path={ROUTES.main} component={MainPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
