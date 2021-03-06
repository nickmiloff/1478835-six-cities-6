import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import OfferInfo from './offer-info';
import {cardsFull, comments} from '../../tests-mock';

describe(`OfferInfo component test`, () => {
  it(`OfferInfo component' should render correctly`, () => {
    const OFFER = cardsFull.adapted[0];
    const REVIEWS = comments.adapted;
    const MAP_PLACES = cardsFull.adapted;

    const {container} = render(
        <Test>
          <OfferInfo
            offer={OFFER}
            reviews={REVIEWS}
            mapPlaces={MAP_PLACES} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
