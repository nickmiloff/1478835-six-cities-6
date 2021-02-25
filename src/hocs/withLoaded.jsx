import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/spiner/spiner';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    return (
      <>
        {!props.isLoaded && <Spinner />}
        <Component {...props} />
      </>
    );
  };

  WithLoading.propTypes = {
    isLoaded: PropTypes.bool.isRequired
  };

  return WithLoading;
};

export default withLoading;
