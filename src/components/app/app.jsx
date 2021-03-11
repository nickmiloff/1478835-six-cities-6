import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

import Spiner from '../spiner/spiner';

const OfferPage = lazy(() => import(`../pages/offer-page/offer-page`));
const FavoritesPage = lazy(() => import(`../pages/favorites-page/favorites-page`));
const LoginPage = lazy(() => import(`../pages/login-page/login-page`));
const MainPage = lazy(() => import(`../pages/main-page/main-page`));
const NotFoundPage = lazy(() => import(`../pages/not-found-page/not-found-page`));

export const ROUTES = {
  offer: `/offer`,
  favorites: `/favorites`,
  login: `/login`,
  main: `/`
};

const App = () => {
  return (
    <Suspense fallback={<Spiner/>}>
      <Switch>
        <Route exact path={`${ROUTES.offer}/:id`} component={OfferPage} />
        <PrivateRoute exact path={ROUTES.favorites} component={FavoritesPage} />
        <Route exact path={ROUTES.login} component={LoginPage} />
        <Route exact path={ROUTES.main} component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
