import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Test from '../test/test';

import ReviewForm from './review-form';

describe(`ReviewForm component test`, () => {
  it(`ReviewForm component' should render correctly`, () => {
    const REVIEW = `Some mock text`;

    const {container, getByTestId, getByDisplayValue} = render(
        <Test>
          <ReviewForm />
        </Test>
    );

    expect(container).toMatchSnapshot();

    userEvent.type(getByTestId(`review`), REVIEW);

    expect(getByDisplayValue(REVIEW)).toBeInTheDocument();
  });
});
