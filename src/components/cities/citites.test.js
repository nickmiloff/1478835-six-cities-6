import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Cities from './cities';
import {cardsFull} from '../../tests-mock';

describe(`Cities component test`, () => {
  const location = `Paris`;

  it(`'Cities component' should render correctly with no cards`, () => {
    const {container} = render(
        <Test>
          <Cities
            cards={[]}
            location={location}
            isEmpty={true} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'Cities component' should render correctly with cards`, () => {
    const {container} = render(
        <Test>
          <Cities
            cards={cardsFull.adapted}
            location={location}
            isEmpty={false} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
