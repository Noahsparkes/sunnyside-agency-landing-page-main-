import React from 'react';

const navLinks = ['About', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <nav className="navbar-shell">
      <a href="#" className="navbar-brand">
        <img src="/images/logo.svg" alt="SunnySide" />
      </a>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

