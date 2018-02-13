import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - not found</h1>
      <Link to="/">GO BACK!</Link>
    </div>
  );
}

export default NotFound;