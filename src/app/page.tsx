import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Hiw from '@/components/hiw';
import Features from '@/components/features';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      < Hero />
      < Features />
     <Hiw />
     <Testimonials />
      <Footer />
    </div>
  );
}
