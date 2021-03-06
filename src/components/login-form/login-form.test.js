import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {TestStore as Test} from '../test/test';

import LoginForm from './login-form';

describe(`LoginForm component test`, () => {
  it(`LoginForm component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <LoginForm />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
