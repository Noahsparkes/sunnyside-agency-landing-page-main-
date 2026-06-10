export default function Footer() {
  return (
    <footer style={{ padding: '2rem', background: '#111', color: '#f4f4f4' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontWeight: 700 }}>Sunnyside</p>
        <nav>
          <a href="#about" style={{ color: '#f4f4f4', marginRight: '1rem', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: '#f4f4f4', marginRight: '1rem', textDecoration: 'none' }}>Services</a>
          <a href="#projects" style={{ color: '#f4f4f4', textDecoration: 'none' }}>Projects</a>
        </nav>
      </div>
    </footer>
  );
}
