import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (menuItem) => {
    setHovered(menuItem);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">Prema Ananda Spiritual Society</div>
      <ul className="nav-links">
        <li
          className={`nav-item ${hovered === 'home' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </li>
        <li
          className={`nav-item ${hovered === 'about' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCurrentPage('about')}
        >
          Who We Are?
        </li>
        <li
          className={`nav-item ${hovered === 'services' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCurrentPage('services')}
        >
          Programs
        </li>
        <li
          className={`nav-item ${hovered === 'contact' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCurrentPage('contact')}
        >
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
