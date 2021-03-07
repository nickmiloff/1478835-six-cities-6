import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {TestHistory as Test} from '../test/test';

import {PureHeader as Header} from './header';
import {auth} from '../../tests-mock';

describe(`Header component e2e test`, () => {
  it(`Header component' should call callback when click on 'logout' button`, () => {
    const handlerOnLogout = jest.fn();

    const {getByTestId} = render(
        <Test>
          <Header
            isAuth={true}
            user={auth.adapted}
            onLogout={handlerOnLogout} />
        </Test>
    );

    fireEvent.click(getByTestId(`logout`));
    expect(handlerOnLogout).toHaveBeenCalled();
  });
});

