import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Header from './header';

describe(`Header component test`, () => {
  it(`'Header component' should render correctly with authorized user`, () => {
    const {container} = render(
        <Test initial={false}>
          <Header />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'Header component' should render correctly with unauthorized user`, () => {
    const {container} = render(
        <Test>
          <Header />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
