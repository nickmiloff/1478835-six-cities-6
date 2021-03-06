import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Reviews from './reviews';
import {comments} from '../../tests-mock';

describe(`Reviews component test`, () => {
  it(`Reviews component' should render correctly with authorized user`, () => {
    const {container} = render(
        <Test initial={false}>
          <Reviews reviews={comments.adapted} isAuth={true} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Reviews component' should render correctly with unauthorized user`, () => {
    const {container} = render(
        <Test>
          <Reviews reviews={comments.adapted} isAuth={false} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
