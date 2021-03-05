import React from 'react';
import {render} from '@testing-library/react';
import Test from '../../test/test';

import MainPage from './main-page';

describe(`MainPage component test`, () => {
  it(`'MainPage component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <MainPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
