import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../store/app/operations';

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit({email, password});
      }}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          autoComplete="on"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          data-testid="email" />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          autoComplete="on"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
          data-testid="password" />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onSubmit: login
};

export default connect(null, mapDispatchToProps)(LoginForm);
