import React from 'react';

const navLinks = ['About', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontSize: '1rem',
          letterSpacing: '0.25rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: '#ffffff',
        }}
      >
        Sunnyside
      </div>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '0.08rem',
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

