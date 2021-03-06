import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import LoginForm from '../../login-form/login-form';
import withAuth from '../../../hocs/with-auth/with-auth';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isAuth}) => {
  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default withAuth(LoginPage);
