import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-parent-cont'>
      <div className='nav-links'>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'links active-link' : 'links nav-link-ltr'}
        >
          <p>Dev Blog</p>
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'links active-link' : 'links nav-link-ltr'}
        >
          <p>About</p>
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'links active-link' : 'links nav-link-ltr'}
        >
          <p>Projects</p>
        </NavLink>
      </div>
    </div>
  );
}
