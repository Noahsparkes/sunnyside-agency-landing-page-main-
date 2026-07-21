export default function Footer() {
  return (
    <footer style={{ padding: '3rem 1.5rem', background: '#A1DBCE', backgroundColor: '#A1DBCE', color: 'hsl(0, 100%, 100%)', fontFamily: 'Barlow, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <img src="/images/logo.svg" alt="Sunnyside" className="footer-logo" />
        <nav className="footer-nav">
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#projects" className="footer-link">Projects</a>
        </nav>
        <div className="footer-social">
          <a href="https://www.facebook.com" aria-label="Facebook" className="footer-social-link">
            <img src="/images/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="footer-social-link">
            <img src="/images/icon-instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="footer-social-link">
            <img src="/images/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com" aria-label="Pinterest" className="footer-social-link">
            <img src="/images/icon-pinterest.svg" alt="Pinterest" />
          </a>
        </div>
      </div>
    </footer>
  );
}
