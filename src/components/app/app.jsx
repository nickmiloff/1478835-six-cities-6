import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';
import Offer from '../offer/offer';
import NotFound from '../not-found/not-found';

const App = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
