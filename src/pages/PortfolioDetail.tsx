import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { portfolioDetailData } from '@/data/portfolioDetailData';
import TechIcon from '@/components/TechIcon';
import { ArrowLeft, CheckCircle2, ExternalLink, Mail } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = portfolioDetailData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-HindMadurai mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-white text-black rounded-full font-HindMadurai hover:bg-white/90 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{project.title} | Portfolio | TryzenIQ</title>
        <meta name="description" content={project.descriptionFull[0]} />
        <meta property="og:title" content={`${project.title} | TryzenIQ`} />
        <meta property="og:description" content={project.descriptionFull[0]} />
        <meta property="og:image" content={project.heroImageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />

      <main className="pt-28 md:pt-[100px] relative">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => navigate(-1)}
            variants={itemVariants}
            className="flex items-center gap-2 text-white hover:text-white transition-colors duration-300 font-HindMadurai group mb-8"
          >
            <ArrowLeft
              size={20}
              className="transform group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span>Back to Portfolio</span>
          </motion.button>

          <motion.div variants={itemVariants} className="mb-10">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl gradient-text font-HindMadurai font-medium leading-tight">
              {project.title}
            </h1>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="mb-12 rounded-2xl overflow-hidden border border-white/10 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={(() => {
                const imageMap: { [key: string]: string } = {
                  'underthearch-portfolio': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
                  'ai-newsletter-generator': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80',
                  'jp-sales-corporation': 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&auto=format&fit=crop&q=80',
                  'litcandles-minicommerce': 'https://images.unsplash.com/photo-1602874801006-0d6c8e6d0a1b?w=1200&auto=format&fit=crop&q=80',
                  'watchinsight-analytics': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80',
                  'lokichess-platform': 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=1200&auto=format&fit=crop&q=80',
                  'shadow-mind-social-tools': 'https://images.unsplash.com/photo-1551288049-1640a144591e?w=1200&auto=format&fit=crop&q=80',
                };
                return project.heroImageUrl || imageMap[project.id] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80';
              })()}
              alt=""
              className="w-full h-[400px] md:h-[500px] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-HindMadurai font-semibold mb-6 gradient-text">Project Overview</h2>
                {project.descriptionFull.map((p, index) => (
                  <p key={index} className="text-white/70 font-HindMadurai mb-4 leading-relaxed text-lg">{p}</p>
                ))}
              </motion.div>

              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-HindMadurai font-semibold mb-6 gradient-text">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-white/80 font-HindMadurai">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-white/[0.02] rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-HindMadurai font-semibold mb-6 gradient-text">Challenge & Solution</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-HindMadurai font-semibold mb-3 text-lg">The Challenge</p>
                    <p className="text-white/70 font-HindMadurai leading-relaxed border-l-4 border-white/30 pl-4 italic">{project.challengeSolution.challenge}</p>
                  </div>
                  <div>
                    <p className="text-white font-HindMadurai font-semibold mb-3 text-lg">Our Solution</p>
                    <p className="text-white/70 font-HindMadurai leading-relaxed border-l-4 border-white/30 pl-4 italic">{project.challengeSolution.solution}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              {/* Live Demo Button */}
              <motion.div
  variants={itemVariants}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <a
    href={project.liveDemoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-between w-full px-6 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-gray-500 bg-black text-white"
  >
    {/* Expanding Circle Background */}
    <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />

    {/* Button Text */}
    <span className="relative z-20 text-base font-HindMadurai font-semibold transition-colors duration-700 group-hover:text-black">
      View Live Demo
    </span>

    {/* Icon (matches design 2 style) */}
    <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
      <ExternalLink
        size={18}
        className="text-black transition-transform duration-700 group-hover:rotate-12"
      />
    </span>
  </a>
</motion.div>


             

              <motion.div 
                variants={itemVariants} 
                className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-HindMadurai font-semibold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStackDetailed.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <TechIcon iconName={tech.icon} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-HindMadurai font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="pb-3 border-b border-white/10">
                    <p className="text-white/50 text-sm font-HindMadurai mb-1">Category</p>
                    <p className="text-white font-HindMadurai font-medium">{project.category}</p>
                  </div>
                  <div className="pb-3 border-b border-white/10">
                    <p className="text-white/50 text-sm font-HindMadurai mb-1">Industry</p>
                    <p className="text-white font-HindMadurai font-medium">{project.category === 'AI & ML' ? 'AI/SaaS' : project.category}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm font-HindMadurai mb-1">Deployment</p>
                    <p className="text-white font-HindMadurai font-medium">Cloud Platform</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default PortfolioDetail;