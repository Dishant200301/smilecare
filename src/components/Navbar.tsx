import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
const Logo = "/image/svgviewer-png-output.svg";
import { navigationData, mainNavLinks } from "../data/navigationdata";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<any>(null);
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState<string | null>(null); // currently open menu
  
    const toggleMenu = (menuKey: string) => {
      setOpenMenu(prev => (prev === menuKey ? null : menuKey)); // close if already open
    };

  
  useEffect(() => {
    const current = mainNavLinks.find(
      (item) => item.path === location.pathname
    );
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  const menuData = navigationData;

  const handleMouseEnter = (dropdown: "services" | "products") => {
    setActiveDropdown(dropdown);

    const firstItem = menuData[dropdown].items[0];
    setHoveredSubItem({ category: dropdown, item: firstItem });
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setHoveredSubItem(null);
  };

  const handleItemClick = (category: string, slug: string) => {
    navigate(`/${category}/${slug}`);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  
  
  
  return (
    <div className="relative bg-background overflow-visible w-full font-HindMadurai">
      

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-lg py-1">
        <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            {/* Logo */}
            <a href="/" onClick={() => setActiveItem("Home")}>
              <div className="mb-[-30px] mt-[-40px]">
                {/* Assuming Logo is a black SVG that needs to be inverted for dark background */}
                <img
                  src={Logo}
                  alt="TryzenIQ Logo"
                  className="h-36 w-auto filter invert brightness-125" // Adjust height and invert for visibility
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="active:bg-gray-900/60 hover:bg-background transition-all duration-300 rounded-full p-1">
              <div className="hidden lg:flex items-center font-serif font-normal">
                {["services", "products"].map((menuKey) => (
                  <div
                    key={menuKey}
                    className="relative group"
                    onMouseEnter={() =>
                      handleMouseEnter(menuKey as "services" | "products")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Main button - navigate to category on click */}
                    <button
                      onClick={() => {
                        navigate(`/${menuKey}`);
                        setActiveDropdown(null);
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

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 w-[44rem] max-w-[95vw] transition-all font-HindMadurai duration-300 ${
                        activeDropdown === menuKey
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="backdrop-blur-xl bg-background border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex">
                        {/* Left List */}
                        <div className="flex-1 py-3 ">
                          {menuData[menuKey].items.map((item, index) => (
                            <div
                              key={index}
                              className={`px-6 py-3 text-foreground/60 hover:text-foreground cursor-pointer transition-all duration-200 border-l-2 ${
                                hoveredSubItem?.item?.name === item.name
                                  ? "border-foreground bg-white/5"
                                  : "border-transparent hover:bg-white/[0.03]"
                              }`}
                              onMouseEnter={() =>
                                setHoveredSubItem({ category: menuKey, item })
                              }
                              onClick={() =>
                                handleItemClick(menuKey, item.slug)
                              }
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

                        {/* Preview Panel */}
                        <div className="w-80 border-l border-white/10 p-5 bg-gradient-to-br from-white/[0.02] to-transparent">
                          {hoveredSubItem &&
                            hoveredSubItem.category === menuKey && (
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                  handleItemClick(
                                    hoveredSubItem.category,
                                    hoveredSubItem.item.slug
                                  )
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    handleItemClick(
                                      hoveredSubItem.category,
                                      hoveredSubItem.item.slug
                                    );
                                  }
                                }}
                                className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-700 cursor-pointer"
                              >
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${hoveredSubItem.item.color} mix-blend-overlay z-10`}
                                ></div>
                                <img
                                  src={hoveredSubItem.item.image}
                                  alt={hoveredSubItem.item.name}
                                  className="relative w-full h-full object-cover rounded-xl border border-white/20 shadow-2xl transition-transform duration-700 hover:scale-105"
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
                      </div>
                    </div>
                  </div>
                ))}

                <a
                  href="/about"
                  className="text-white/70 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/5 transition-all font-HindMadurai duration-300"
                >
                  About
                </a>
                <a
                  href="/blog"
                  className="text-white/70 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/5 transition-all font-HindMadurai duration-300"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact")}
                className="bg- active:bg-gray-900/60 border border-gray-500 hover:bg-background group relative flex items-center justify-between text-white font-semibold pl-6 pr-14 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl"
              >
                {/* Expanding circle on hover */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />

                {/* Button text */}
                <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                  Contact Us
                </span>

                {/* Icon (right side) */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
                  <ArrowRight className="w-5 h-5 text-black transition-colors duration-700" />
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-white/5 rounded-lg transition-all"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-2 h-[calc(90vh-2rem)] mb-20 backdrop-blur-xl bg-black/90 border border-white/10 rounded-2xl shadow-2xl py-4 transition-all duration-500">
              <div className="space-y-2 px-4">
              {["services", "products"].map((menuKey) => (
          <div key={menuKey} className="group">
            {/* Summary */}
            <div
              onClick={() => toggleMenu(menuKey)}
              className="text-white/80 px-4 py-3 cursor-pointer hover:bg-white/5 rounded-lg flex items-center justify-between font-HindMadurai"
            >
              <span className="capitalize">{menuKey}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openMenu === menuKey ? "rotate-180" : ""}`}
              />
            </div>

            {/* Dropdown content */}
            {openMenu === menuKey && (
              <div className="pl-6 space-y-2 mt-2">
                {menuData[menuKey].items.map((item, index) => (
                  <div
                    key={index}
                    className="text-white/60 py-2 hover:text-white cursor-pointer font-HindMadurai text-sm"
                    onClick={() => handleItemClick(menuKey, item.slug)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
                <a
                  href="/about"
                  className="block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
                >
                  About Us
                </a>
                <a
                  href="/blog"
                  className="block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="w-full block text-white/80 px-4 py-3 hover:bg-white/5 rounded-lg font-HindMadurai"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
