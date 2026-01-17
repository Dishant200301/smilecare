import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Clock, Facebook, Twitter, Linkedin, Instagram, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path: string) => location.pathname === path;

    // Common styles
    const activeStyle = "bg-white/20 hover:bg-white/30";
    const inactiveStyle = "bg-[#8b6b6e] hover:bg-[#7a5d60]";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsAboutOpen(false);
    };

    // Check if on appointments page
    const isAppointmentsPage = location.pathname === '/appointments';

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Determine navbar background
    const getNavbarBackground = () => {
        if (isAppointmentsPage) {
            return 'bg-gradient-to-r from-[#fdabb7] to-[#fc9aaa] shadow-lg';
        }
        return scrolled ? 'bg-white shadow-md' : 'bg-transparent';
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:px-20 ${getNavbarBackground()}`}>
                {/* Desktop Top Bar - Hidden on mobile/tablet */}
                {!scrolled && (
                    <div className="hidden lg:block">
                        <div className="container mx-auto px-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Link to="/">
                                    <img src="/image/logo.png" alt="Denticare Smiles Logo" className="h-20 " />
                                </Link>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <img src="/image/icon/phone.png" alt="Phone" className="w-10 h-10" />
                                    <div>
                                        <p className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-playfair text-[22.4px] leading-tight`}>+36 55 540 069</p>
                                        <p className={`${isAppointmentsPage ? 'text-white/90' : 'text-dental-text'} text-xs`}>24/7 Emergency Phone</p>
                                    </div>
                                </div>

                                <Link
                                    to="/appointments"
                                    className="bg-white text-[#fc9aaa] hover:bg-white/95 border-2 border-white font-roboto-condensed text-base font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    BOOK APPOINTMENT
                                </Link>
                            </div>
                        </div>
                    </div>
                )}


                {/* Navigation Bar */}
                <div className={`container mx-auto px-4  ${scrolled ? "py-0 lg:py-4" : "py-0 lg:py-4"} border-t border-white/20`}>
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button - LEFT SIDE - Visible only on mobile/tablet */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden flex flex-col gap-[5px] p-2 hover:opacity-70 transition-opacity "
                            aria-label="Open menu"
                        >
                            <span className={`w-7 h-[3px] ${isAppointmentsPage ? 'bg-white' : scrolled ? 'bg-[#fdabb7]' : 'bg-black/75'}`}></span>
                            <span className={`w-7 h-[3px] ${isAppointmentsPage ? 'bg-white' : scrolled ? 'bg-[#fdabb7]' : 'bg-black/75'}`}></span>
                            <span className={`w-7 h-[3px] ${isAppointmentsPage ? 'bg-white' : scrolled ? 'bg-[#fdabb7]' : 'bg-black/75'}`}></span>
                        </button>

                        {/* Mobile Logo with Color Change on Scroll - Visible only on mobile/tablet */}
                        <div className="lg:hidden flex items-center justify-center ">
                            <Link to="/" className="flex items-center pl-6 p-3.5">
                                <img src="/image/favicon.png" alt="Tooth Icon" className="h-8 w-8 mr-1 " />
                                <div className="font-playfair text-2xl ">
                                    <span className={`${isAppointmentsPage ? 'text-white' : 'text-[#343d4b]'} font-bold`}>Denti</span>
                                    <span className={`${isAppointmentsPage ? 'text-white' : scrolled ? 'text-[#fdabb7]' : 'text-white'}`}>Care</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation - LEFT SIDE - Hidden on mobile/tablet */}
                        <ul className="hidden lg:flex items-center gap-8">
                            <li>
                                <Link to="/" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-roboto-condensed text-[16px] transition-colors hover:opacity-80`}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-roboto-condensed text-[16px] transition-colors hover:opacity-80`}>
                                    ABOUT US
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-roboto-condensed text-[16px] transition-colors hover:opacity-80`}>
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-roboto-condensed text-[16px] transition-colors hover:opacity-80`}>
                                    BLOGS
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} font-roboto-condensed text-[16px] transition-colors hover:opacity-80`}>
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>

                        {/* Desktop Social Icons - RIGHT SIDE - Hidden on mobile/tablet */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a href="#" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} transition-colors hover:opacity-80`}>
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} transition-colors hover:opacity-80`}>
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} transition-colors hover:opacity-80`}>
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className={`${isAppointmentsPage ? 'text-white' : 'text-dental-text'} transition-colors hover:opacity-80`}>
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Empty div for mobile to maintain spacing */}
                        <div className="lg:hidden w-11"></div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Menu - Only visible on mobile/tablet */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                />

                {/* Sidebar - Slides from LEFT */}
                <div
                    className={`absolute top-0 left-0 h-full w-[85%] max-w-[360px] bg-gradient-to-b from-[#fcb0ba] to-[#e8b4b8] shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* Sidebar Header with Logo and Close Button */}
                    <div className="relative px-6 pt-6 pb-4 flex items-center justify-center border-b border-white/20">
                        {/* Logo - Centered */}
                        <Link to="/" onClick={closeMobileMenu} className="flex items-center">
                            <img src="/image/favicon.png" alt="Tooth Icon" className="h-12 w-12 mr-2" />
                            <div className="font-playfair text-2xl font-bold">
                                <span className="text-[#343d4b]">Denti</span>
                                <span className="text-white">Care</span>
                            </div>
                        </Link>

                        {/* Close Button - Absolute positioned top-right */}
                        <button
                            onClick={closeMobileMenu}
                            className="absolute right-6 text-white hover:opacity-70 transition-opacity"
                            aria-label="Close menu"
                        >
                            <X className="w-7 h-7 stroke-[2.5]" />
                        </button>
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex flex-col h-[calc(100%-88px)] overflow-y-auto">
                        {/* Contact Info - Centered */}
                        <div className="px-6 py-4 space-y-4 border-b border-white/20">
                            {/* Phone */}
                            <div className="flex items-center justify-center gap-3">
                                <img src="/image/icon/phone.png" alt="Phone" className="w-10 h-10" />
                                <div className="text-center">
                                    <p className="text-white font-playfair text-lg leading-tight">+36 55 540 069</p>
                                    <p className="text-white/80 text-xs">24/7 Emergency Phone</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center justify-center gap-3">
                                <img src="/image/icon/clock.png" alt="Clock" className="w-10 h-10" />
                                <div className="text-center">
                                    <p className="text-white font-playfair text-lg leading-tight">Monday - Friday</p>
                                    <p className="text-white/80 text-xs">9AM - 9PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu - Centered */}
                        <nav className="flex-1 px-6 py-6">
                            <ul className="space-y-2">
                                <li className="text-center">
                                    <Link
                                        to="/"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/") ? activeStyle : inactiveStyle}`}
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link
                                        to="/about"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/about") ? activeStyle : inactiveStyle}`}
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link
                                        to="/services"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/services") ? activeStyle : inactiveStyle}`}
                                    >
                                        SERVICES
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link
                                        to="/appointments"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/appointments") ? activeStyle : inactiveStyle}`}
                                    >
                                        BOOK APPOINTMENT
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link
                                        to="/blog"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/blog") ? activeStyle : inactiveStyle}`}
                                    >
                                        BLOGS
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link
                                        to="/contact"
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-white font-roboto-condensed text-base font-medium rounded-md transition-colors ${isActive("/contact") ? activeStyle : inactiveStyle}`}
                                    >
                                        CONTACT US
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
