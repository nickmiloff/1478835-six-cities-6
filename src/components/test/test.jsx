import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as stores from './mock-store';

const Test = ({children, initial = true, pushUrl = null}) => {
  const mockStore = configureStore({});
  const store = mockStore(() => initial ? stores.empty : stores.notEmpty);
  const history = createMemoryHistory();
  if (pushUrl) {
    history.push(pushUrl);
  }
  store.dispatch = () => {};

  return (
    <Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  );
};

const TestHistory = ({children, pushUrl = null}) => {
  const history = createMemoryHistory();
  if (pushUrl) {
    history.push(pushUrl);
  }

  return (
    <Router history={history}>
      {children}
    </Router>
  );
};

const TestStore = ({children, initial = true}) => {
  const mockStore = configureStore({});
  const store = initial ? stores.empty : stores.notEmpty;

  return (
    <Provider store={mockStore(() => store)}>
      {children}
    </Provider>
  );
};

Test.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  initial: PropTypes.bool,
  pushUrl: PropTypes.string
};

TestHistory.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pushUrl: PropTypes.string
};

TestStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  initial: PropTypes.bool
};

export default Test;
export {
  TestStore,
  TestHistory
};
