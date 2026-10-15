import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import Features from '@/components/Features';
import Architecture from '@/components/Architecture';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#070809] text-[#e6e9ee]">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <Architecture />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
