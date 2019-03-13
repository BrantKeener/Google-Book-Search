import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// A Navbar component for the app

const Navbar = () => {
  return (
    <nav className = 'navbar'>
      <Link className = 'nav-brand' to = '/'>
        Google Book Search
      </Link>
      <div className = 'nav-links'>
        <ul>
          <li className = 'nav-item'>
            <Link className = 'nav-search' to = '/search'>
              Search
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link className = 'nav-saved' to = '/saved'>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;