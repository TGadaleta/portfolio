import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/styles.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/battleship">Battleship</Link></li>
        <li><Link to="/nptp">NPTP</Link></li>
        <li><Link to="/brightmind">BrightMind</Link></li>
        <li><Link to="/gamecupid">GameCupid</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;