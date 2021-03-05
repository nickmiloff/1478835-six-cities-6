import React from 'react';
import {render} from '@testing-library/react';
import Test from '../../test/test';

import NotFoundPage from './not-found-page';

describe(`NotFoundPage component test`, () => {
  it(`'NotFoundPage component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <NotFoundPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
