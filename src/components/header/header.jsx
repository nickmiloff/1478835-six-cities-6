import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getIsAuth} from '../../store/app/selectors';
import HeaderProfile from '../header-profile/header-profile';
import HeaderNoLogin from '../header-no-login/header-no-login';

const Header = ({isAuth}) => {
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
              {isAuth && <HeaderProfile /> || <HeaderNoLogin />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state)
});

export default connect(mapStateToProps)(Header);
