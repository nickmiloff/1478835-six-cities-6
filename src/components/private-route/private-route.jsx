import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {getIsAuth} from '../../store/app/selectors';

const PrivateRoute = ({component: Component, isAuth, ...params}) => {
  return (
    <Route render={(props) => (isAuth && <Component {...props} /> || <Redirect to="/login" />)} {...params} />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
