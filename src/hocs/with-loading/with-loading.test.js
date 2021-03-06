import React from 'react';
import {render} from '@testing-library/react';
import {Statuses} from '../../services/load-statuses';

import withLoading from './with-loading';

describe(`withLoading HOC test`, () => {
  const MockComponent = () => (<span />);
  const MockComponentWithHOC = withLoading(MockComponent);

  it(`'withLoading HOC' should render correctly with 'load' status`, () => {
    const {container} = render(<MockComponentWithHOC isLoaded={Statuses.LOAD} />);

    expect(container).toMatchSnapshot();
  });

  it(`'withLoading HOC' should render correctly with 'loaded' status`, () => {
    const {container} = render(<MockComponentWithHOC isLoaded={Statuses.LOADED} />);

    expect(container).toMatchSnapshot();
  });
});
