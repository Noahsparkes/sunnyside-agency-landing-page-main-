const galleryItems = [
  {
    desktop: '/images/desktop/image-gallery-milkbottles.jpg',
    mobile: '/images/mobile/image-gallery-milkbottles.jpg',
  },
  {
    desktop: '/images/desktop/image-gallery-orange.jpg',
    mobile: '/images/mobile/image-gallery-orange.jpg',
  },
  {
    desktop: '/images/desktop/image-gallery-cone.jpg',
    mobile: '/images/mobile/image-gallery-cone.jpg',
  },
  {
    desktop: '/images/desktop/image-gallery-sugarcubes.jpg',
    mobile: '/images/mobile/image-gallery-sugar-cubes.jpg',
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-shell">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.desktop} className="gallery-card">
              <picture>
                <source media="(min-width: 769px)" srcSet={item.desktop} />
                <source media="(max-width: 768px)" srcSet={item.mobile} />
                {/* Use mobile image as fallback so small devices get the correct asset when sources are ignored */}
                <img src={item.mobile} alt="Gallery item" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
