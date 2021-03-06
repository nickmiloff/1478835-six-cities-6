import React from 'react';
import {render} from '@testing-library/react';
import {TestHistory as Test} from '../test/test';

import Footer from './footer';

describe(`Footer component test`, () => {
  it(`'Footer component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <Footer />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
