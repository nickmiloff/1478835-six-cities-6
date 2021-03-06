import * as React from 'react';
import {render} from '@testing-library/react';
import Test from '../../test/test';

import OfferPage from './offer-page';

describe(`OfferPage component test`, () => {
  it(`'OfferPage component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <OfferPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
