import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import NearPlaces from './near-places';
import {cardsFull} from '../../tests-mock';

describe(`NearPlaces component test`, () => {
  it(`'NearPlaces component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <NearPlaces places={cardsFull.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
