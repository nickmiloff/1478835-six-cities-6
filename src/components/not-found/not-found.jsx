import React from 'react';

const styles = {
  width: `100%`,
  height: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`
};

const NotFound = () => {
  return (
    <main style={styles}>
      <h1>404 Page not found</h1>
      <a href="/">Home page</a>
    </main>
  );
};

export default NotFound;
