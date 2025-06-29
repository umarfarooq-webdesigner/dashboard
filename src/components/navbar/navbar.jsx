import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Umar Farooq</div>

      <div className="navbar-icons-mobile">
        <div
          className="theme-toggle"
          onClick={toggleTheme}
          title={isDark ? "Light Mode" : "Dark Mode"}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            <FaUser className="icon" /> About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            <FaProjectDiagram className="icon" /> Projects
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={toggleMenu}>
            <FaEnvelope className="icon" /> Contacts
          </a>
        </li>
        <li className="theme-toggle-desktop">
          <div
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
