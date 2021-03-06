import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {PureLoginForm as LoginForm} from './login-form';

describe(`LoginForm component e2e test`, () => {
  it(`LoginForm component' should correctly change fields`, () => {
    const MAIL = `mail@mail.ru`;
    const PASSWORD = `123456`;

    const {getByTestId, getByDisplayValue} = render(<LoginForm onSubmit={jest.fn()} />);

    userEvent.type(getByTestId(`email`), MAIL);
    userEvent.type(getByTestId(`password`), PASSWORD);

    expect(getByDisplayValue(MAIL)).toBeInTheDocument();
    expect(getByDisplayValue(PASSWORD)).toBeInTheDocument();
  });

  it(`LoginForm component' should call callback when submit form`, () => {
    const handlerOnSubmit = jest.fn();

    const {getByTestId} = render(<LoginForm onSubmit={handlerOnSubmit} />);

    fireEvent.submit(getByTestId(`form`));

    expect(handlerOnSubmit).toHaveBeenCalled();
  });
});
