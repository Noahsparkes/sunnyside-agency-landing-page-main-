const testimonials = [
  {
    name: 'Emily R.',
    quote: 'Sunnyside exceeded our expectations. The team completely transformed our brand presence.',
  },
  {
    name: 'Thomas S.',
    quote: 'The photography and design direction was exactly what our business needed.',
  },
  {
    name: 'Jennie F.',
    quote: 'Our website now feels premium, polished, and much more engaging to customers.',
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Client Testimonials</h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              style={{
                padding: '1.75rem',
                borderRadius: '24px',
                background: '#f8f7fd',
                border: '1px solid #e5e3ff',
              }}
            >
              <p style={{ margin: '0 0 1rem', fontStyle: 'italic', color: '#333' }}>
                “{item.quote}”
              </p>
              <footer style={{ fontWeight: 700, color: '#111' }}>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
