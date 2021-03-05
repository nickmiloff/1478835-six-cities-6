import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Cities from './cities';
import {cardsFull} from '../../tests-mock';

describe(`Cities component test`, () => {
  it(`'Cities component' should render correctly with no cards`, () => {
    const CARDS = [];
    const LOCATION = `Paris`;

    const {container} = render(
        <Test>
          <Cities
            cards={CARDS}
            location={LOCATION}
            isEmpty={true} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'Cities component' should render correctly with cards`, () => {
    const CARDS = cardsFull.adapted;
    const LOCATION = `Paris`;

    const {container} = render(
        <Test>
          <Cities
            cards={CARDS}
            location={LOCATION}
            isEmpty={false} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
