import React from 'react';
import {connect} from 'react-redux';
import {getIsAuth} from '../../store/app/selectors';

const withAuth = (Component) => {
  const WithAuth = (props) => <Component {...props} />;

  const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
