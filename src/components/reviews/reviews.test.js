import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Reviews from './reviews';
import {comments} from '../../tests-mock';

describe(`Reviews component test`, () => {
  it(`Reviews component' should render correctly with authorized user`, () => {
    const REVIEWS = comments.adapted;

    const {container} = render(
        <Test initial={false}>
          <Reviews reviews={REVIEWS} isAuth={true} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Reviews component' should render correctly with un-authorized user`, () => {
    const REVIEWS = comments.adapted;

    const {container} = render(
        <Test>
          <Reviews reviews={REVIEWS} isAuth={false} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
