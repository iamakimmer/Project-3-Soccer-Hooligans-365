import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h1>
        <Link to="/">Soccer Hooligans 365</Link>
      </h1>
    </div>
  );
}

export default Header;
