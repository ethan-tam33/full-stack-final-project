import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <ul>
        <li><Link to="./login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Main;