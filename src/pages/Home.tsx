// src/pages/Home.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/ServicesSection'; // ✅ Use Services.tsx directly
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <Services limit={6} /> {/* ✅ Works now */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
