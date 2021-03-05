import React from 'react';
import {render} from '@testing-library/react';

import Test, {TestHistory, TestStore} from './test';

describe(`Test component test`, () => {
  it(`'Test component' should render correctly`, () => {
    const {container} = render(<Test><div /></Test>);

    expect(container).toMatchSnapshot();
  });

  it(`'TestHistory component' should render correctly`, () => {
    const {container} = render(<TestHistory><div /></TestHistory>);

    expect(container).toMatchSnapshot();
  });

  it(`'TestStore component' should render correctly`, () => {
    const {container} = render(<TestStore><div /></TestStore>);

    expect(container).toMatchSnapshot();
  });
});
