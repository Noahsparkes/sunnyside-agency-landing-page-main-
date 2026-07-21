import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="hero-shell">
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