import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <h1>Henrriky</h1>
      <ul className="nav-links">
        <li><Link to="/aulas">Aulas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </div>
  )
}

export default Nav

