import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Phone,
    Home,
    User,
    Stethoscope,
    FileText,
    Menu,
    X,
    ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [hoveredPath, setHoveredPath] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setHoveredPath(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            // Prevent background scroll
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            // Re-enable scroll
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
            document.body.style.width = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
            document.body.style.width = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "About Us", path: "/about", icon: User },
        { name: "Services", path: "/services", icon: Stethoscope },
        { name: "Blogs", path: "/blog", icon: FileText },
        { name: "Contact Us", path: "/contact", icon: Phone },
    ];

    return (
        <>
            {/* ================= DESKTOP NAVBAR (UNCHANGED) ================= */}
            <motion.nav className="fixed left-0 right-0 z-50 pointer-events-none flex justify-center top-2 lg:top-4">
                <motion.div className="pointer-events-auto relative bg-white/90 backdrop-blur-md border border-white/50 shadow-lg rounded-full p-2 pl-6 flex items-center justify-between w-[92%] max-w-4xl lg:max-w-7xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 mr-4 lg:mr-12">
                        <img src="/image/favicon.png" className="w-8 h-8" />
                        <span className="text-xl font-bold text-[#1D70B8]">
                            SmileCare
                        </span>
                    </Link>

                    {/* Desktop Links - Centered */}
                    <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
                        {navLinks
                            .filter((l) => l.path !== "/")
                            .map((link) => {
                                const active = location.pathname === link.path;
                                return (
                                    <li key={link.name} className="relative">
                                        <Link
                                            to={link.path}
                                            className={`px-4 py-3.5 rounded-full text-[16px] font-medium transition-all duration-300 ${active
                                                ? "text-white"
                                                : "text-slate-500  hover:text-slate-700"
                                                }`}
                                        >
                                            {active && (
                                                <motion.span
                                                    layoutId="activeNav"
                                                    className="absolute inset-[-10px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end rounded-full -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>

                    {/* CTA + Mobile Button */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/appointments"
                            className="hidden lg:flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end text-white font-bold"
                        >
                            Book Appointment <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center transition-all"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* ================= MOBILE + TABLET MENU (Smooth Slide Down) ================= */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] lg:hidden "
                    >
                        {/* Backdrop Overlay */}
                        <motion.div
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Menu Panel - Slides down from navbar */}
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass: 0.8,
                            }}
                            className="absolute inset-0 m-3 sm:m-6 backdrop-blur-xl bg-white border border-slate-200 rounded-[18px] shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="px-6 py-6 flex justify-between items-center border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <img src="/image/favicon.png" className="w-8 h-8" />
                                    <span className="text-xl font-bold text-[#1D70B8]">
                                        SmileCare
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Navigation Links - Scrollable */}
                            <div className="flex-1 overflow-y-auto px-4 py-4">
                                <div className="space-y-2">
                                    {navLinks.map((link, i) => {
                                        const active = location.pathname === link.path;
                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: i * 0.05,
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`flex items-center rounded-2xl transition-all ${active
                                                        ? "bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end text-white shadow-md"
                                                        : "bg-[#e4eefa] text-slate-700 hover:bg-[#e4eefa] active:bg-[#d4dff0]"
                                                        }`}
                                                    style={{
                                                        gap: "12px",
                                                        paddingLeft: "16px",
                                                        paddingRight: "16px",
                                                        paddingTop: "14px",
                                                        paddingBottom: "14px",
                                                    }}
                                                >
                                                    <link.icon style={{ width: "20px", height: "20px" }} className="flex-shrink-0" />
                                                    <span style={{ fontSize: "16px", fontWeight: active ? 600 : 500 }}>
                                                        {link.name}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Book Appointment CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                                    className="mb-20px"
                                >
                                    <Link
                                        to="/appointments"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center w-full rounded-2xl mt-4 bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end text-white font-bold shadow-lg hover:shadow-xl transition-all"
                                        style={{
                                            gap: "10px",
                                            paddingTop: "16px",
                                            paddingBottom: "16px",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Book Appointment
                                        <ArrowRight style={{ width: "18px", height: "18px" }} />
                                    </Link>
                                </motion.div>

                                {/* Contact Info - Compact */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 + 0.2, duration: 0.3 }}
                                    className="border-t border-slate-200 mt-4"
                                    style={{ paddingTop: "16px" }}
                                >
                                    <div
                                        className="flex items-center bg-slate-50 rounded-xl"
                                        style={{
                                            gap: "12px",
                                            padding: "14px",
                                        }}
                                    >
                                        <div
                                            className="rounded-full bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end flex items-center justify-center flex-shrink-0"
                                            style={{ width: "44px", height: "44px" }}
                                        >
                                            <Phone className="text-white" style={{ width: "20px", height: "20px" }} />
                                        </div>
                                        <div>
                                            <p className="text-slate-500 font-medium" style={{ fontSize: "11px", marginBottom: "2px" }}>
                                                24/7 Support
                                            </p>
                                            <p className="font-bold text-slate-800" style={{ fontSize: "16px" }}>
                                                +36 55 540 069
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
