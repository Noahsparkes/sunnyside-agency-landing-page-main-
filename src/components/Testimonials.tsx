const testimonials = [
  {
    name: 'Emily R.',
    quote: 'Sunnyside exceeded our expectations. The team completely transformed our brand presence.',
    image: '/images/image-emily.jpg',
  },
  {
    name: 'Thomas S.',
    quote: 'The photography and design direction was exactly what our business needed.',
    image: '/images/image-thomas.jpg',
  },
  {
    name: 'Jennie F.',
    quote: 'Our website now feels premium, polished, and much more engaging to customers.',
    image: '/images/image-jennie.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-image" />
              <p className="testimonial-quote">&quot;{item.quote}&quot;</p>
              <footer className="testimonial-name">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
