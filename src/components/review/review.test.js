import React from 'react';
import {render} from '@testing-library/react';

import Review from './review';
import {comments} from '../../tests-mock';

describe(`Review component test`, () => {
  it(`Review component' should render correctly`, () => {
    const REVIEW = comments.adapted[0];

    const {container} = render(<Review {...REVIEW} />);

    expect(container).toMatchSnapshot();
  });
});
