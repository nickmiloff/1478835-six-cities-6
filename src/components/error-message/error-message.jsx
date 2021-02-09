import React from 'react';
import PropTypes from 'prop-types';
import './error-message.css';

const ErrorMessage = ({status, statusText}) => {
  return (
    <section className="error-message">
      <h1>{status}</h1>
      <p>{statusText}</p>
      <button
        className="form__submit button"
        onClick={() => {
          location.reload();
        }}>
          Reload
      </button>
    </section>
  );
};

ErrorMessage.propTypes = {
  status: PropTypes.number.isRequired,
  statusText: PropTypes.string.isRequired
};

export default ErrorMessage;
