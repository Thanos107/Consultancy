import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Font Awesome for social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className="footer-logo-text">Consulting Co.</a>
        </div>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/consultants">Consultants</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Consulting Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
