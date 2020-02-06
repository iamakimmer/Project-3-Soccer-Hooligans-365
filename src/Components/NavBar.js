import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>
        <Link to="/Competition">Competition</Link>
        <Link to="/Fixtures">Fixtures</Link>
        <Link to="/Scorers">Scorers</Link>
      </h1>
    </div>
  );
}

export default NavBar;
