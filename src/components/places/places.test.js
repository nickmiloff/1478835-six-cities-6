import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Places from './places';
import {cardsFull} from '../../tests-mock';

describe(`Places component test`, () => {
  it(`Places component' should render correctly`, () => {
    const CARDS = cardsFull.adapted;
    const LOCATION = `Paris`;

    const {container} = render(
        <Test>
          <Places
            cards={CARDS}
            location={LOCATION}
            setActiveCardId={() => {}} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
