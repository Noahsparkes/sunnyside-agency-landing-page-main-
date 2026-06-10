const galleryItems = [
  '/images/desktop/image-gallery-milkbottles.jpg',
  '/images/desktop/image-gallery-orange.jpg',
  '/images/desktop/image-gallery-cone.jpg',
  '/images/desktop/image-gallery-sugarcubes.jpg',
];

export default function Gallery() {
  return (
    <section style={{ padding: '3rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Gallery</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {galleryItems.map((src) => (
            <div key={src} style={{ overflow: 'hidden', borderRadius: '24px' }}>
              <img src={src} alt="Gallery item" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
