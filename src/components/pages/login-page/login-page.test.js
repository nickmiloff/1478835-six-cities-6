import React from 'react';
import {render} from '@testing-library/react';
import Test from '../../test/test';

import LoginPage from './login-page';

describe(`LoginPage component test`, () => {
  it(`'LoginPage component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <LoginPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
