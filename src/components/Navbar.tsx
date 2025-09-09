import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
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

  const isActive = (name: string) => activeItem === name;

  return (
    <nav className="fixed left-0 right-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full">
        <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between h-20 gap-4">

            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group flex-shrink-0">
              <Link
                to="/"
                onClick={() => setActiveItem('Home')}
                className="ml-8"
              >
                <img
                  src="/svgviewer-png-output.svg"
                  alt="TryzenIQ Logo"
                  className="h-40 w-auto invert"
                />
              </Link>
            </div>

            {/* Desktop Navigation (exclude Home) */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
              {navItems
                .filter(item => item.name !== 'Home')
                .map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setActiveItem(item.name)}
                    className={`text-lg relative px-5 py-3 rounded-full font-medium font-serif transition-all duration-300 group overflow-hidden ${
                      isActive(item.name)
                        ? "text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
                        isActive(item.name)
                          ? "bg-[#8bafd2] scale-100 opacity-100"
                          : "bg-white/5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                ))}
            </div>

            {/* CTA Button for Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                to="/contact"
                onClick={() => setActiveItem('Contact')}
                className="group relative inline-flex items-center justify-between 
                           border border-gray-500 text-white font-semibold 
                           mr-6 pl-5 pr-5 py-2 rounded-full overflow-hidden 
                           transition-all duration-500 ease-in-out"
              >
                <span
                  className="absolute flex items-center justify-center 
                             w-1 h-1 rounded-full bg-[#8caac8] text-black z-10 
                             transition-transform duration-500 ease-in-out group-hover:scale-[95]"
                />
                <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Book Demo
                </span>
              </Link>
            </div>

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

          {/* Mobile Navigation (include Home) */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-6 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    isActive(item.name)
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
