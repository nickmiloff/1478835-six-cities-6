import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import withAuth from '../../hocs/with-auth/with-auth';

const PrivateRoute = ({component: Component, isAuth, ...params}) => {
  return (
    <Route render={(props) => (isAuth && <Component {...props} /> || <Redirect to="/login" />)} {...params} />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default withAuth(PrivateRoute);
