import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import ReviewForm from './review-form';

describe(`ReviewForm component test`, () => {
  it(`ReviewForm component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <ReviewForm />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
