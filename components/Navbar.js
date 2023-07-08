"use client"
import { useState } from 'react';
import '../styles/styles.css'

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
  
    const handleMouseEnter = (link) => {
      setHoveredLink(link);
    };
  
    const handleMouseLeave = () => {
      setHoveredLink(null);
    };
  
    return (
        <div className='shadow_nav'>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li
            className={`nav-item ${hoveredLink === 'home' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#home" className="nav-link">
              Home
            </a>
            {hoveredLink === 'home' && <div className="popup_nav">Home Slide Page Menue Popup</div>}
          </li>
          <li
            className={`nav-item ${hoveredLink === 'about' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#about" className="nav-link">
              About
            </a>
            {hoveredLink === 'about' && <div className="popup_nav">About Popup</div>}
          </li>
          <li
            className={`nav-item ${hoveredLink === 'services' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#services" className="nav-link">
              Services
            </a>
            {hoveredLink === 'services' && (
              <div className="popup_nav">Services Popup</div>
            )}
          </li>
          <li
            className={`nav-item ${hoveredLink === 'portfolio' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            {hoveredLink === 'portfolio' && (
              <div className="popup_nav">Portfolio Popup</div>
            )}
          </li>
          <li
            className={`nav-item ${hoveredLink === 'contact' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#contact" className="nav-link">
              Contact
            </a>
            {hoveredLink === 'contact' && (
              <div className="popup_nav">Contact Popup</div>
            )}
          </li>
        </ul>
       
      </nav>
      </div>
    );
  };
  
  export default Navbar;
  