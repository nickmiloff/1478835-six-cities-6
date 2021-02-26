import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {authInfoPropTypes} from '../../prop-types.prop';
import {getUser} from '../../store/app/selectors';
import {logout} from '../../store/app/operations';
import withAuth from '../../hocs/withAuth';

const styles = {
  border: `none`,
  backgroundColor: `transparent`
};

const Header = ({isAuth, user, onLogout}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth && `/favorites` || `/login`}>
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={isAuth && {backgroundImage: user.avatarUrl} || {}}></div>
                  <span className={isAuth && `header__user-name user__name` || `header__login`}>{isAuth && user.email || `Sign in`}</span>
                </Link>
              </li>
              {isAuth &&
                <li className="header__nav-item user">
                  <button className="header__nav-link header__nav-link--profile" style={styles} onClick={() => onLogout()}>
                    <span className="header__login">Logout</span>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.shape(authInfoPropTypes),
  onLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: getUser(state)
});

const mapDispatchToProps = {
  onLogout: logout
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth
)(Header);
