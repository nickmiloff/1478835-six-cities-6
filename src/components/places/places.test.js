import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Places from './places';
import {cardsFull} from '../../tests-mock';

describe(`Places component test`, () => {
  it(`Places component' should render correctly`, () => {
    const location = `Paris`;

    const {container} = render(
        <Test>
          <Places
            cards={cardsFull.adapted}
            location={location}
            setActiveCardId={() => {}} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
