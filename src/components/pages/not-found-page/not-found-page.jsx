import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  width: `100%`,
  height: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`
};

const NotFoundPage = () => {
  return (
    <main style={styles}>
      <h1>404 Page not found</h1>
      <Link to="/">Home page</Link>
    </main>
  );
};

export default NotFoundPage;
