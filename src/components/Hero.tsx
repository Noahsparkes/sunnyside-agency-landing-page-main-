export default function Hero() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: 1.05, color: '#ffffff', fontFamily: 'Fraunces, serif', fontWeight: 700 }}>
          We are creatives
        </h1>
        <img
          src="/images/icon-arrow-down.svg"
          alt="Scroll down"
          style={{ width: '40px', margin: '2rem auto 0', display: 'block' }}
        />
      </div>
    </section>
  );
}
