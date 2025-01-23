import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import icon from "/src/assets/icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={icon} alt="App Icon" />
        
        <Link to="/" className="title">To-Do App</Link>
      </div>
      <div className="navbar__menu">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/taskpage">Tasks</Link>
          </li>
          <li>
            <Link to="/aboutpage">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
