import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TestStore as Test} from '../test/test';

import LoginForm from './login-form';

describe(`LoginForm component test`, () => {
  it(`LoginForm component' should render correctly`, () => {
    const MAIL = `mail@mail.ru`;
    const PASSWORD = `123456`;

    const {container, getByTestId, getByDisplayValue} = render(
        <Test>
          <LoginForm />
        </Test>
    );

    expect(container).toMatchSnapshot();

    userEvent.type(getByTestId(`email`), MAIL);
    userEvent.type(getByTestId(`password`), PASSWORD);

    expect(getByDisplayValue(MAIL)).toBeInTheDocument();
    expect(getByDisplayValue(PASSWORD)).toBeInTheDocument();
  });
});
