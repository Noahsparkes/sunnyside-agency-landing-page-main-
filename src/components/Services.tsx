export default function Services() {
  const services = [
    {
      slug: 'transform',
      title: 'Transform your brand',
      description: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      variant: 'text-only',
    },
    {
      slug: 'egg',
      title: 'Egg',
      image: '/images/desktop/image-transform.jpg',
      variant: 'image-only',
    },
    {
      slug: 'cup',
      title: 'Cup',
      image: '/images/desktop/image-stand-out.jpg',
      variant: 'image-only',
    },
    {
      slug: 'standout',
      title: 'Stand out to the right audience',
      description: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
      variant: 'text-only',
    },
    {
      slug: 'graphic',
      title: 'Graphic Design',
      description: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
      image: '/images/desktop/image-graphic-design.jpg',
      variant: 'stacked',
    },
    {
      slug: 'photography',
      title: 'Photography',
      description: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      image: '/images/desktop/image-photography.jpg',
      variant: 'stacked',
    },
  ];

  const getMobileImage = (image: string) => image.replace('/images/desktop/', '/images/mobile/');

  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className={`services-card services-card-${service.variant} services-card-${service.slug}`}>
              {service.variant === 'text-only' ? (
                <div className="services-card-text-only">
                  <div>
                    <h3>{service.title}</h3>
                    <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 600, fontSize: '18px' }}>{service.description}</p>
                    {(service.title === 'Transform your brand' || service.title === 'Stand out to the right audience') && (
                      <a
                        href="#"
                        id={service.title === 'Transform your brand' ? 'learn-more-brand' : 'learn-more-audience'}
                        className="service-learn-more"
                      >
                        Learn more
                      </a>
                    )}
                  </div>
                </div>
              ) : service.variant === 'image-only' ? (
                <picture>
                  <source media="(max-width: 768px)" srcSet={getMobileImage(service.image!)} />
                  <img className="services-card-image services-card-image-only" src={service.image} alt={service.title} />
                </picture>
              ) : (
                <div className="services-card-stacked">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={getMobileImage(service.image!)} />
                    <img className="services-card-image services-card-image-stacked" src={service.image} alt={service.title} />
                  </picture>
                  <div className="services-card-overlay">
                    <h3>{service.title}</h3>
                    <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 600, fontSize: '18px' }}>{service.description}</p>
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
