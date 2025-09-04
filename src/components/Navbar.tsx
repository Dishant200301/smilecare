import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Sync activeItem with current URL
  useEffect(() => {
    const current = navItems.find(item => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  const handleNavigation = (path: string, name: string) => {
    navigate(path);
    setActiveItem(name);
  };

  const isActive = (name: string) => activeItem === name;

  return (
    <nav className="fixed left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-br-sm rounded-bl-sm border border-white/10 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between h-20 gap-4">

            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group flex-shrink-0"
              onClick={() => handleNavigation('/', 'Home')}
            >
             
              <div className="ml-8 text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                TryzenIQ
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.name)}
                  className={`relative px-5 py-3 rounded-full font-medium transition-all duration-300 group ${
                    isActive(item.name)
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.name) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button for Desktop */}
            {/* <div className="hidden lg:block flex-shrink-0">
              <button
                onClick={() => handleNavigation('/contact', 'Contact')}
                className="relative inline-flex items-center justify-center mr-5 px-5 lg:px-6 py-2.5
                           rounded-full border border-white/30
                           text-sm font-semibold tracking-wide cursor-pointer 
                           overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#ffffff] rounded-full 
                                 origin-right scale-x-0 group-hover:scale-x-100 
                                 transition-transform duration-500 ease-out"></span>
                <span className="relative text-white group-hover:text-black transition-colors duration-300">
                  Book Demo
                </span>
              </button>
            </div> */}

            {/* Mobile menu button */}
            <div className="lg:hidden p-2 flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-white/80 hover:text-white rounded-2xl hover:bg-white/5 transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item.path, item.name);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    isActive(item.name) 
                      ? 'text-white bg-white/10' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigation('/contact', 'Contact');
                  }}
                  className="group w-full relative px-6 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>BOOK DEMO</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
