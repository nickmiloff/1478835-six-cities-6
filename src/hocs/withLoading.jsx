import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/spiner/spiner';
import * as statuses from '../services/load-statuses';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    return (
      <>
        {props.isLoaded === statuses.LOAD && <Spinner />}
        <Component {...props} />
      </>
    );
  };

  WithLoading.propTypes = {
    isLoaded: PropTypes.oneOf([...Object.values(statuses)]).isRequired
  };

  return WithLoading;
};

export default withLoading;
