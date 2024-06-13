import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ sections }) {
  return (
    <nav>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <Link to={section.address}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
