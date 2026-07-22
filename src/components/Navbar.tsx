"use client";

import React, { useEffect, useRef, useState } from 'react';

const navLinks = ['About', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (open && menuRef.current && !menuRef.current.contains(target) && !target.closest('.navbar-toggle')) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, [open]);

  return (
    <nav className="navbar-shell">
      <a href="#" className="navbar-brand">
        <img src="/images/logo.svg" alt="SunnySide" />
      </a>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <img src="/images/icon-hamburger.svg" alt="Open menu" />
      </button>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar-link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div id="mobile-menu" ref={menuRef} className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul className="mobile-menu-list">
          {navLinks.map((link) => (
            <li key={`m-${link}`}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`mobile-menu-link ${link === activeLink ? 'active' : ''}`}
                onClick={() => {
                  setActiveLink(link);
                  setOpen(false);
                }}
                aria-current={link === activeLink ? 'page' : undefined}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

