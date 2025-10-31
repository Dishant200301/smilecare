import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { portfolioData, PortfolioCard } from '@/data/portfolioData';

const PortfolioItemCard = ({ project, index }: { project: PortfolioCard; index: number }) => {
  const getProjectImage = (projectId: string) => {
    const imageMap: { [key: string]: string } = {
      'underthearch-portfolio': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
      'ai-newsletter-generator': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
      'jp-sales-corporation': 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop&q=80',
      'litcandles-minicommerce': 'https://images.unsplash.com/photo-1602874801006-0d6c8e6d0a1b?w=800&auto=format&fit=crop&q=80',
      'watchinsight-analytics': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'lokichess-platform': 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&auto=format&fit=crop&q=80',
      'shadow-mind-social-tools': 'https://images.unsplash.com/photo-1551288049-1640a144591e?w=800&auto=format&fit=crop&q=80',
    };
    return project.imageUrl || imageMap[projectId] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className="group relative block rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform border border-gray-900 hover:border-white/20"
      >
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={getProjectImage(project.id)}
            alt=""
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 bg-black flex flex-col flex-grow">
          

          {/* Title */}
          <h3 className="text-xl font-bold font-HindMadurai leading-tight mb-3 text-white group-hover:text-white transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 font-HindMadurai leading-relaxed mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack & View Project */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 2).map((tech, i) => (
                <span key={i} className="text-xs font-medium text-gray-500 font-HindMadurai">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold font-HindMadurai text-white group-hover:gap-3 transition-all duration-300">
              View Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stickyTopOffset = 80;

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Our Portfolio | TryzenIQ</title>
        <meta
          name="description"
          content="Explore our showcase of successful projects and implementations that demonstrate our expertise and innovation."
        />
        <meta property="og:title" content="Portfolio | TryzenIQ" />
        <meta
          property="og:description"
          content="Discover our portfolio of AI, web development, mobile apps, cloud solutions, and automation projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="pt-28 md:pt-[170px] relative">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="text-center mb-12 px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
            Our <span className="font-InstrumentSerif italic">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto">
            Explore our showcase of successful projects and implementations that demonstrate our expertise and innovation.
          </p>
        </motion.header>


        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${isMobile ? 'mobile-sticky-card' : ''}`}
                style={isMobile ? { zIndex: index + 1, top: `${stickyTopOffset}px`, marginBottom: '20px' } : {}}
                initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0 }}
                viewport={{ once: true, amount: 0 }}
              >
                <PortfolioItemCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Portfolio;