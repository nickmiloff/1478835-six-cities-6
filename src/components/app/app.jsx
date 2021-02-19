import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from '../../store/store';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

const ROUTES = {
  offer: `/offer`,
  favorites: `/favorites`,
  login: `/login`,
  main: `/`
};

const App = ({cards, offer, reviews}) => {
  return (
    <Provider store={store}>
      <div className="page page--gray page--main">
        <BrowserRouter>
          <Switch>
            <Route exact path={`${ROUTES.offer}/:id`}>
              <OfferPage offer={offer} reviews={reviews} nearPlaces={cards} />
            </Route>
            <Route exact path={ROUTES.favorites}>
              <FavoritesPage cards={cards} />
            </Route>
            <Route exact path={ROUTES.login}>
              <LoginPage />
            </Route>
            <Route exact path={ROUTES.main}>
              <MainPage cards={cards} />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired,
  offer: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
