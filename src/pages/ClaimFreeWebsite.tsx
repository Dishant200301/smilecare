"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle2, Video, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { motion } from "framer-motion";
import { countryCodes } from "@/data/countryCodes";



const CountrySelect = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);
    const scrollInterval = React.useRef<NodeJS.Timeout | null>(null);

    const selectedCountry = countryCodes.find((c) => c.dial_code === value) || countryCodes[0];

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const startScrolling = (direction: number) => {
        if (scrollInterval.current) clearInterval(scrollInterval.current);
        scrollInterval.current = setInterval(() => {
            if (listRef.current) {
                listRef.current.scrollTop += direction * 5;
            }
        }, 16);
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    const searchBufferRef = React.useRef("");
    const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        if (!isOpen) {
            searchBufferRef.current = "";
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.length === 1 && e.key.match(/[a-z\s]/i)) {
                // e.preventDefault(); // Optional: might block other shortcuts, keep enabled for now

                const char = e.key;
                searchBufferRef.current += char;

                if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
                searchTimeoutRef.current = setTimeout(() => {
                    searchBufferRef.current = "";
                }, 1500);

                const searchTerm = searchBufferRef.current.toLowerCase();
                const matchedCountry = countryCodes.find(c =>
                    c.name.toLowerCase().startsWith(searchTerm)
                );

                if (matchedCountry) {
                    const element = document.getElementById(`country-item-${matchedCountry.code}`);
                    if (element) {
                        element.scrollIntoView({ block: "nearest" });
                    }
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        };
    }, [isOpen]);

    return (
        <div className="relative h-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-full bg-zinc-800 border border-zinc-700 border-r-0 text-white rounded-l-lg rounded-r-none px-3 flex items-center justify-start gap-2 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
            >
                <img
                    src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                    alt={selectedCountry.name}
                    className="w-6 h-4 object-cover rounded-[2px]"
                />
                <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-300">{selectedCountry.dial_code}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-[250px] z-50 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl overflow-hidden">
                    {/* Top Scroll Arrow */}
                    <div
                        className="h-6 flex items-center justify-center   cursor-pointer "
                        onMouseEnter={() => startScrolling(-1)}
                        onMouseLeave={stopScrolling}
                    >
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Scrollable List */}
                    <div
                        ref={listRef}
                        className="max-h-[300px] overflow-y-auto bg-zinc-900 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                    >
                        {countryCodes.map((country) => (
                            <div
                                key={country.code}
                                id={`country-item-${country.code}`}
                                onClick={() => {
                                    onChange(country.dial_code);
                                    setIsOpen(false);
                                }}
                                className={`px-4 py-2 flex items-center gap-3 cursor-pointer transition-colors ${country.dial_code === value ? "bg-zinc-800" : "hover:bg-zinc-800/50"
                                    }`}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                    alt={country.name}
                                    className="w-6 h-4 object-cover rounded-[2px] flex-shrink-0"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">{country.name}</span>
                                    <span className="text-xs text-gray-400">{country.dial_code}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Scroll Arrow */}
                    <div
                        className="h-6 flex items-center justify-center cursor-pointer "
                        onMouseEnter={() => startScrolling(1)}
                        onMouseLeave={stopScrolling}
                    >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>
            )}
        </div>
    );
};

const ClaimFreeWebsite = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        state: "",
        city: "",
        phoneCode: "+1",
        phone: "",
        email: "",
        requirement: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSuccessMessage(
            "Thank you! Your request has been submitted. We will contact you soon."
        );
        setFormData({
            firstName: "",
            lastName: "",
            country: "",
            state: "",
            city: "",
            phoneCode: "+1",
            phone: "",
            email: "",
            requirement: "",
        });
        setTimeout(() => setSuccessMessage(""), 5000);
    };

    const steps = [
        {
            id: 1,
            icon: <CheckCircle2 className="w-6 h-6 text-black" />,
            title: "Fill the Form",
            description:
                "Fill the form details. After you submit, our team will reach out to you soon to confirm your details.",
        },
        {
            id: 2,
            icon: <Video className="w-6 h-6 text-black" />,
            title: "Attend Zoom Meeting",
            description:
                "After completing step 1, our team will mail you a link for an online Zoom meeting. You need to attend to discuss your website idea with us.",
        },
        {
            id: 3,
            icon: <Star className="w-6 h-6 text-black" />,
            title: "Create UGC Video",
            description:
                "After completing step 2 and receiving your website, you need to make a review UGC video for our company.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-body relative overflow-hidden">
            <Helmet>
                <title>Claim Free Website | TryzenIQ</title>
                <meta
                    name="description"
                    content="Claim your free website today! Follow our simple 3-step process to get started."
                />
            </Helmet>

            <Navbar />

            <main className="pt-32 md:pt-[170px] pb-20">
                {/* Hero */}
                <section className="mb-16">
                    <motion.div
                        className="max-w-4xl mx-auto text-center px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
                            Claim Your <span className="font-InstrumentSerif italic">Free Website</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-2xl mx-auto">
                            Ready to take your business online? Fill out the form below to get started with your free website journey.
                        </p>
                    </motion.div>
                </section>

                {/* Content Section */}
                <section className="relative px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                            {/* Left Side: Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-[#161618] p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-sm"
                            >
                                <h2 className="text-2xl md:text-3xl font-HindMadurai font-medium mb-8 text-white">
                                    Enter Your Details
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="John"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[white] focus:ring-2 focus:ring-[white]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Doe"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Phone Number *
                                            </label>
                                            <div className="flex gap-0">
                                                <div className="w-[35%] relative">
                                                    <CountrySelect
                                                        value={formData.phoneCode}
                                                        onChange={(code) => setFormData({ ...formData, phoneCode: code })}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="(555) 000-0000"
                                                        required
                                                        className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-r-lg rounded-l-none px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Country *
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                placeholder="Country"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                State *
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                placeholder="State"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                placeholder="City"
                                                required
                                                className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>



                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Describe Your Requirement *
                                        </label>
                                        <textarea
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about the website you want to build..."
                                            required
                                            className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 min-h-[120px] focus:border-white focus:ring-1 focus:ring-white/20 outline-none transition-all resize-y"
                                        />
                                    </div>

                                    {successMessage && (
                                        <div className="text-white text-center font-medium font-HindMadurai">
                                            {successMessage}
                                        </div>
                                    )}

                                    <div className="flex justify-center pt-4">
                                        <button
                                            type="submit"
                                            className="group relative flex items-center justify-between border border-gray-500 text-white font-semibold font-HindMadurai pl-6 pr-14 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:border-white"
                                        >
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
                                            <span className="relative z-20 transition-colors duration-700 group-hover:text-black text-lg">
                                                Submit Request
                                            </span>
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10">
                                                <Send className="w-5 h-5 text-black" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Right Side: Steps */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col h-full"
                            >
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-4xl font-HindMadurai text-center md:text-left font-medium mb-4">
                                        How to Claim Your  {" "}
                                        <span className="font-InstrumentSerif italic">Free Website</span>
                                    </h2>
                                    <p className="text-gray-400 text-lg text-center md:text-left">
                                        Follow these simple steps to get your professional website built by our expert team.
                                    </p>
                                </div>

                                <div className="space-y-8 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-zinc-700 via-zinc-700 to-transparent hidden md:block" />

                                    {steps.map((step, index) => (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="relative flex gap-6 group"
                                        >
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className="w-12 h-12 rounded-full bg-white border border-zinc-700 flex items-center justify-center transition-all duration-500">
                                                    <div className="transition-colors duration-500">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <h3 className="text-xl font-semibold font-HindMadurai mb-2 text-white group-hover:text-white/90 transition-colors">
                                                    Step {step.id}: {step.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed font-HindMadurai group-hover:text-gray-300 transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
                                    <p className="text-lg text-gray-500 italic text-center">
                                        * Terms and conditions apply. The free website offer is subject to approval of your business idea.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default ClaimFreeWebsite;
