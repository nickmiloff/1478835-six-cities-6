import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../header/header';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

const App = ({cards, offer, reviews}) => {
  return (
    <div className="page page--gray page--main">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/offer/:id">
            <OfferPage offer={offer} reviews={reviews} nearPlaces={cards} />
          </Route>
          <Route exact path="/favorites">
            <FavoritesPage cards={cards} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <MainPage cards={cards} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired,
  offer: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
