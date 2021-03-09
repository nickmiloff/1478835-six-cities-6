import React from 'react';
import {Route} from 'react-router-dom';
import {render} from '@testing-library/react';
import Test from '../test/test';

import PrivateRoute from './private-route';

describe(`PrivateRoute component test`, () => {
  const MockComponent = () => <h1>Mock component</h1>;

  it(`'PrivateRoute component' should render correctly 'component' with authorized user`, () => {
    const {container} = render(
        <Test initial={false}>
          <Route exact path="/login"><h1>Login page</h1></Route>
          <PrivateRoute component={MockComponent} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'PrivateRoute component' should correctly redirect to '/' with unauthorized user`, () => {
    const {container} = render(
        <Test>
          <Route exact path="/login"><h1>Login page</h1></Route>
          <PrivateRoute component={MockComponent} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
