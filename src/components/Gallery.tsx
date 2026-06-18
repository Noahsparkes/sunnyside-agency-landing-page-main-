const galleryItems = [
  '/images/desktop/image-gallery-milkbottles.jpg',
  '/images/desktop/image-gallery-orange.jpg',
  '/images/desktop/image-gallery-cone.jpg',
  '/images/desktop/image-gallery-sugarcubes.jpg',
];

export default function Gallery() {
  return (
    <section style={{ padding: 0, background: '#fff' }}>
      <div style={{ width: '100vw', maxWidth: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <div style={{ display: 'grid', gap: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {galleryItems.map((src) => (
            <div key={src} style={{ overflow: 'hidden', borderRadius: 0 }}>
              <img src={src} alt="Gallery item" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
