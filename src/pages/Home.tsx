import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;