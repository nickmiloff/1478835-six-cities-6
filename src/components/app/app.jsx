import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';

const App = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
