import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import vectorLogo from '../assets/dav.svg';

const Navbar = ({ onLogout }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={vectorLogo} alt="Davoice Logo" className="nav-vector-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/info" 
          className={location.pathname === '/info' ? 'active' : ''}
        >
          Information
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
        >
          About us
        </Link>
      </div>
      <button onClick={onLogout} className="logout-btn">Log out</button>
    </nav>
  );
};

export default Navbar; 