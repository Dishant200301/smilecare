import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
const Logo = "/image/svgviewer-png-output.svg";
import { navigationData, mainNavLinks } from "../data/navigationdata";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // State for desktop dropdown (services/products)
  const [hoveredSubItem, setHoveredSubItem] = useState<any>(null); // State for preview in desktop dropdown
  const [activeItem, setActiveItem] = useState("Home"); // To highlight the current active link
  const location = useLocation();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState<string | null>(null); // State for mobile nested dropdowns (services/products)

  // Toggles the expansion of a mobile menu category
  const toggleMenu = (menuKey: string) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  // Sets the active main navigation item based on the current URL
  useEffect(() => {
    const current = mainNavLinks.find(
      (item) => item.path === location.pathname
    );
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  const menuData = navigationData;

  // Function to close all active desktop dropdowns
  const closeDropdowns = () => {
    setActiveDropdown(null);
    setHoveredSubItem(null);
  };

  // Handles mouse entering a main button (Services/Products) to open its dropdown
  const handleMouseEnterButton = (dropdown: "services" | "products") => {
    setActiveDropdown(dropdown);
    // Set the first item as hovered by default for the preview pane
    if (menuData[dropdown] && menuData[dropdown].items.length > 0) {
      setHoveredSubItem({
        category: dropdown,
        item: menuData[dropdown].items[0],
      });
    }
  };

  // Handles clicking a dropdown item, navigates, and closes menus
  const handleItemClick = (category: string, slug: string) => {
    navigate(`/${category}/${slug}`);
    closeDropdowns(); // Close desktop dropdown
    setIsOpen(false); // Close mobile menu
  };

  return (
    <div className="relative bg-background overflow-visible w-full font-HindMadurai">
      {/* Navbar Container */}
      <nav
        id="navbar-area"
        className="fixed top-0 z-50 py-1 mt-1 rounded-sm backdrop-blur-2xl shadow-lg bg-black/10
                   inset-x-0 mx-auto 
                   max-w-[calc(100vw-1rem)] 
                   sm:max-w-[calc(100vw-2rem)] 
                   md:max-w-[calc(100vw-4rem)] 
                   lg:max-w-[calc(100vw-8rem)] 
                   xl:max-w-7xl 
                   transition-all duration-300 
                   "
        onMouseLeave={closeDropdowns}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" onClick={() => setActiveItem("Home")}>
            <div className="mb-[-30px] mt-[-40px]">
              <img
                src={Logo}
                alt="TryzenIQ Logo"
                className="h-36 w-auto filter invert brightness-125"
              />
            </div>
          </a>

          {/* Desktop Nav Links (hidden on smaller screens with lg:flex) */}
          <div className="hidden lg:flex items-center font-serif font-normal active:bg-gray-900/60 hover:bg-background transition-all duration-300 rounded-full p-1">
            {["services", "products"].map((menuKey) => (
              <div
                key={menuKey}
                className="group"
                onMouseEnter={() =>
                  handleMouseEnterButton(menuKey as "services" | "products")
                }
              >
                <button
                  onClick={() => {
                    navigate(`/${menuKey}`);
                    setActiveDropdown(null); // Close dropdown on direct category click
                  }}
                  className="text-foreground/80 hover:text-foreground flex items-center space-x-1.5 px-5 py-2.5 rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  <span className="capitalize">{menuKey}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === menuKey
                        ? "rotate-180 text-foreground"
                        : ""
                    }`}
                  />
                </button>
              </div>
            ))}
            {/* <a
              href="/portfolio"     
              className="text-white/70 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/5 transition-all font-HindMadurai duration-300"
            >
              Portfolio
            </a> */}

            <a
              href="/about"
              className="text-white/70 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/5 transition-all font-HindMadurai duration-300"
            >
              About
            </a>
            <a
              href="/blogs"
              className="text-white/70 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/5 transition-all font-HindMadurai duration-300"
            >
              Blogs
            </a>
          </div>

          {/* Contact Button (hidden on smaller screens with lg:block) */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate("/contact")}
              className="border border-gray-500 hover:bg-background group relative flex items-center justify-between text-white font-semibold pl-4 pr-14 py-2.5 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl"
            >
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
              <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                Contact Us
              </span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
                <ArrowRight className="w-5 h-5 text-black transition-colors duration-700" />
              </span>
            </button>
          </div>

          {/* Mobile Toggle Button (visible only on smaller screens with lg:hidden) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- CENTRALIZED DROPDOWN MENU (Desktop Only) --- */}
        {/* Uses `opacity-0 invisible pointer-events-none` to effectively hide and disable when not active. */}
        <div
          id="global-dropdown"
          className={`absolute top-full left-0 right-0 mx-auto z-50 w-[44rem] max-w-[95vw] transition-all font-HindMadurai duration-300
              ${
                activeDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }
              backdrop-blur-xl bg-background border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex
            `}
        >
          {activeDropdown && menuData[activeDropdown] && (
            <>
              {/* Left List of items */}
              <div className="flex-1 py-3">
                {menuData[activeDropdown].items.map((item, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 text-foreground/60 hover:text-foreground cursor-pointer transition-all duration-200 border-l-2 ${
                      hoveredSubItem?.item?.name === item.name
                        ? "border-foreground bg-white/5"
                        : "border-transparent hover:bg-white/[0.03]"
                    }`}
                    onMouseEnter={() =>
                      setHoveredSubItem({ category: activeDropdown, item })
                    }
                    onClick={() => handleItemClick(activeDropdown, item.slug)}
                  >
                    <div className="font-normal font-HindMadurai">
                      {item.name}
                    </div>
                    <div className="text-xs text-foreground/30">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Preview Pane */}
              <div className="w-80 border-l border-white/10 p-5 bg-gradient-to-br from-white/[0.02] to-transparent">
                {hoveredSubItem &&
                  hoveredSubItem.category === activeDropdown && (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        handleItemClick(
                          hoveredSubItem.category,
                          hoveredSubItem.item.slug
                        )
                      }
                      className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-700 cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${hoveredSubItem.item.color} mix-blend-overlay z-10`}
                      ></div>
                      <img
                        key={hoveredSubItem.item.image}
                        src={hoveredSubItem.item.image}
                        alt={hoveredSubItem.item.name}
                        className="relative w-full h-full object-cover rounded-xl border border-white/20 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 translate-y-2 animate-fadeInSmooth"
                        onLoad={(e) => {
                          const img = e.currentTarget;
                          requestAnimationFrame(() => {
                            img.classList.remove(
                              "opacity-0",
                              "translate-y-2"
                            );
                            img.classList.add("opacity-100", "translate-y-0");
                          });
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-xl z-20"></div>
                      <div className="absolute bottom-5 left-5 right-5 z-30">
                        <h3 className="text-white font-HindMadurai text-normal mb-1">
                          {hoveredSubItem.item.name}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {hoveredSubItem.item.desc}
                        </p>
                      </div>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu (visible only on smaller screens, toggled by isOpen state) */}
        

<AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="lg:hidden mt-2 h-[calc(94vh-2rem)] mb-20 backdrop-blur-xl bg-black/90 border border-white/10 rounded-2xl shadow-2xl py-4 overflow-y-auto"
    >
      <div className="space-y-2 px-4">
        {["services", "products"].map((menuKey) => (
          <div key={menuKey} className="group">
            {/* Main menu button */}
            <div
              onClick={() => toggleMenu(menuKey)}
              className="text-white/80 px-4 py-3 cursor-pointer hover:bg-white/5 rounded-lg flex items-center justify-between font-HindMadurai"
            >
              <span className="capitalize">{menuKey}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openMenu === menuKey ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown items with smooth expand/collapse */}
            <motion.div
              initial={false}
              animate={{
                height: openMenu === menuKey ? "auto" : 0,
                opacity: openMenu === menuKey ? 1 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="overflow-hidden pl-6 space-y-2 mt-2"
            >
              {menuData[menuKey]?.items.map((item, index) => (
                <div
                  key={index}
                  className="text-white/60 py-2 hover:text-white cursor-pointer font-HindMadurai text-sm"
                  onClick={() => handleItemClick(menuKey, item.slug)}
                >
                  {item.name}
                </div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Static links */}
        <a
          href="/about"
          className="block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
        >
          About Us
        </a>
        <a
          href="/blogs"
          className="block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
        >
          Blogs
        </a>
        <a
          href="/contact"
          className="block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
        >
          Contact Us
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;