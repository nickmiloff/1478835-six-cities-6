import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import PrivateRoute from './private-route';

describe(`PrivateRoute component test`, () => {
  const MockComponent = () => <div />;

  it(`'PrivateRoute component' should render correctly 'component' with authorized user`, () => {
    const {container} = render(
        <Test initial={false}>
          <PrivateRoute component={MockComponent} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'PrivateRoute component' should correctly redirect to '/' with unauthorized user`, () => {
    const {container} = render(
        <Test>
          <PrivateRoute component={MockComponent} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
