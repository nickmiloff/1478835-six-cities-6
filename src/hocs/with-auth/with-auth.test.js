import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import {TestStore as Test} from '../../components/test/test';

import withAuth from './with-auth';

describe(`withAuth HOC test`, () => {
  const MockComponent = ({isAuth}) => (<span>{isAuth.toString()}</span>);
  const MockComponentWithHOC = withAuth(MockComponent);

  MockComponent.propTypes = {isAuth: PropTypes.bool.isRequired};

  it(`'withAuth HOC' should render correctly with authorized user`, () => {
    const {container} = render(
        <Test initial={false}>
          <MockComponentWithHOC />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'withAuth HOC' should render correctly with unauthorized user`, () => {
    const {container} = render(
        <Test>
          <MockComponentWithHOC />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
