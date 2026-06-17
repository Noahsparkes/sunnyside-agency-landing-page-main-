export default function Services() {
  const services = [
    {
      title: 'Transform your brand',
      description: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      variant: 'text-only',
    },
    {
      title: 'Egg',
      image: '/images/desktop/image-transform.jpg',
      variant: 'image-only',
    },
    {
      title: 'Cup',
      image: '/images/desktop/image-stand-out.jpg',
      variant: 'image-only',
    },
    {
      title: 'Stand out to the right audience',
      description: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
      variant: 'text-only',
    },
    {
      title: 'Graphic Design',
      description: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
      image: '/images/desktop/image-graphic-design.jpg',
      variant: 'stacked',
    },
    {
      title: ' Photography',
      description: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      image: '/images/desktop/image-photography.jpg',
      variant: 'stacked',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className={`services-card services-card-${service.variant}`}>
              {service.variant === 'text-only' ? (
                <div className="services-card-text-only">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ) : service.variant === 'image-only' ? (
                <img className="services-card-image services-card-image-only" src={service.image} alt={service.title} />
              ) : (
                <div className="services-card-stacked">
                  <img className="services-card-image services-card-image-stacked" src={service.image} alt={service.title} />
                  <div className="services-card-overlay">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
