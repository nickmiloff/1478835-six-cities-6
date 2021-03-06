import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import ReviewsList from './reviews-list';
import {comments} from '../../tests-mock';

describe(`ReviewsList component test`, () => {
  it(`'ReviewsList component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <ReviewsList reviews={comments.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
