export default function Services() {
  const services = [
    {
      title: 'Graphic Design',
      description: 'Transforming your ideas into beautiful, effective visual experiences.',
    },
    {
      title: 'Photography',
      description: 'Creating striking imagery that brings your brand story to life.',
    },
  ];

  return (
    <section style={{ padding: '3rem 2rem', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Services</h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                padding: '1.75rem',
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
              }}
            >
              <h3 style={{ margin: '0 0 0.75rem', fontSize: '1.3rem' }}>{service.title}</h3>
              <p style={{ margin: 0, color: '#555', lineHeight: 1.75 }}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
