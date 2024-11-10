import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-theme"); // Add dark theme class
    } else {
      document.body.classList.remove("dark-theme"); // Remove dark theme class
    }
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/consultants">Consultants</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {darkMode ? <FaSun /> : <FaMoon />}{" "}
              {/* Toggle between sun and moon icons */}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
