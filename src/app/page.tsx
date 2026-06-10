import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: 'url(/images/desktop/image-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}