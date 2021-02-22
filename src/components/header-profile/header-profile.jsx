import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {authInfoPropTypes} from '../../prop-types.prop';
import {getUser} from '../../store/app/selectors';
import {logout} from '../../store/app/operations';

const styles = {
  border: `none`,
  backgroundColor: `transparent`
};

const HeaderProfile = ({user, onLogout}) => {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites">
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{backgroundImage: user.avatarUrl}}></div>
          <span className="header__user-name user__name">{user.email}</span>
        </Link>
      </li>
      <li className="header__nav-item user">
        <button className="header__nav-link header__nav-link--profile" style={styles} onClick={() => onLogout()}>
          <span className="header__login">Logout</span>
        </button>
      </li>
    </>
  );
};

HeaderProfile.propTypes = {
  user: PropTypes.shape(authInfoPropTypes).isRequired,
  onLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: getUser(state)
});

const mapDispatchToProps = {
  onLogout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
