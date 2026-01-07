
import Navbar from "@/components/Navbar";
import SendIcon from "@/components/icons/SendIcon";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    CheckCircle,
    Zap,
    TrendingUp,
    Code,
    Headphones,
    Repeat,
    Layers,
    Star,
    Shield,
    Sparkles,
    UserCheck,
    Clock,
    Bot,
    Database,
    MessageSquare,
    Workflow,
    Search,
    Edit3,

    FileText,
    BarChart3,
    Award,
    Printer,
    Image as ImageIcon,
    Smartphone,
    Package,
    DollarSign,
    Settings,
    Monitor,
    Server,
    ShoppingCart,
    Layout,
    Cloud,
    Palette,
    Users,
    Scissors,
    Heart,
    Dumbbell,
    Home,
    Briefcase,
    Camera,
    Smile,
    Activity,
    Calendar,
    MapPin,
    Phone,
    Coffee,
    Music,
    PenTool,
    Truck,
    Wrench,
    Droplet,
    Sun,
    User,
    Figma,
    Slack,
    Github,
    Chrome,
    CreditCard,
} from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams, Link } from "react-router-dom";
import { categoryDetailData, portfolioItems } from "@/data/categoryDetailData";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TestimonialSection from "@/components/Testimonials";
import WorkflowSection from "@/components/WorkflowSection";
import GradientButton from "@/components/GradientButton";





const Counter = ({ to }: { to: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView && ref.current) {
            const controls = animate(0, to, {
                duration: 2,
                onUpdate(value) {
                    if (ref.current) ref.current.textContent = value.toFixed(0);
                },
                ease: "easeOut",
            });
            return () => controls.stop();
        }
    }, [inView, to]);

    return <span ref={ref}>0</span>;
};

const CategoryDetail = () => {
    const { slug } = useParams();
    const category = categoryDetailData[slug as keyof typeof categoryDetailData];

    if (!category) {
        return <div className="text-center py-20 text-muted font-inter">Category not found</div>;
    }

    const {
        metaTitle,
        metaDescription,
        title,
        subtitle,
        lottieSrc,
        heroDescription,
        subServices,
        features,
        // @ts-ignore
        heroImages,
        // @ts-ignore
        benefitImage,
        // @ts-ignore
        processImages,
    } = category;

    const marqueeRow1 = heroImages ? heroImages.slice(0, Math.ceil(heroImages.length / 2)) : [];
    const marqueeRow2 = heroImages ? heroImages.slice(Math.ceil(heroImages.length / 2)) : [];

    const whyChooseUsSection = features[0];

    const splitTitle = (fullTitle: string) => {
        const parts = fullTitle.split(" for ");
        if (parts.length > 1) {
            return {
                gradientPart: parts[0] + " for",
                italicPart: parts.slice(1).join(" for "),
            };
        }

        const words = fullTitle.split(" ");
        return {
            gradientPart: words.slice(0, words.length - 2).join(" "),
            italicPart: words.slice(words.length - 2).join(" "),
        };
    };

    const { gradientPart, italicPart } = splitTitle(whyChooseUsSection.title);

    const iconMap: any = {
        Bot,
        Workflow,
        TrendingUp,
        Database,
        MessageSquare,
        Sparkles,
        Search,
        Edit3,
        Link,
        Code,
        FileText,
        BarChart3,
        Monitor,
        Server,
        ShoppingCart,
        Layout,
        Cloud,
        Award,
        Palette,
        Printer,
        Image: ImageIcon,
        Smartphone,
        Zap,
        Package,
        Users,
        DollarSign,
        UserCheck,
        Settings,
        CheckCircle,
        Scissors,
        Heart,
        Dumbbell,
        Home,
        Briefcase,
        Camera,
        Star,
        Smile,
        Activity,
        Calendar,
        MapPin,
        Phone,
        Coffee,
        Music,
        PenTool,
        Truck,
        Wrench,
        Droplet,
        Sun,
        User,
    };

    const whyChooseSubs = whyChooseUsSection.points.map((point) => ({
        icon: "CheckCircle",
        title: point,
        description: "",
    }));

    const renderServiceCards = (
        items: any[],
        gridCols: string = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        useIcons: boolean = true
    ) => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`grid ${gridCols} gap-8`}
        >
            {items.map((sub, i) => {
                const IconComponent = useIcons && sub.icon ? iconMap[sub.icon] : null;

                return (
                    <div
                        key={i}
                        className="group relative bg-background backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                    >
                        <div className="p-4 md:lg:p-6">
                            <div className="mb-4">
                                {useIcons && (
                                    <div className="flex items-center">
                                        <div className="p-2 bg-[white] rounded-md mr-4">
                                            {IconComponent ? (
                                                <IconComponent className="w-6 h-6 text-black" />
                                            ) : (
                                                <CheckCircle className="w-6 h-6 text-black" />
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                                            {sub.title}
                                        </h3>
                                    </div>
                                )}

                                {!useIcons && (
                                    <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                                        {sub.title}
                                    </h3>
                                )}

                                {sub.description && (
                                    <p className="text-muted font-inter leading-relaxed whitespace-pre-line">
                                        {sub.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );


    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>

            <Navbar />

            <main className="pt-16">
                {/* Hero */}
                {/* Hero */}
                <section className="pt-10 md:pt-20 pb-20 px-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-background pointer-events-none" />

                    <div className="max-w-5xl mx-auto text-center relative z-10 mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-2 leading-tight font-HindMadurai"
                        >
                            {title} <span className="text-muted font-InstrumentSerif italic">{subtitle}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-lg text-gray-400 font-HindMadurai max-w-2xl mx-auto mb-6"
                        >
                            {heroDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center gap-8"
                        >
                            {/* Button */}
                            <a
                                href="/contact"
                                className="group relative flex items-center justify-between text-white bg-transparent font-semibold pl-6 pr-16 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-white/20 hover:border-white/40"
                            >
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
                                <span className="relative z-20 transition-colors duration-700 group-hover:text-black font-HindMadurai text-lg">
                                    Start a project
                                </span>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                                    <SendIcon className="w-5 h-5 text-black transition-colors duration-700" />
                                </span>
                            </a>

                            {/* Review Section */}
                            <div className="flex items-center gap-4 text-sm font-medium text-white">
                                <div className="flex flex-col items-end">
                                    <div className="flex text-warning gap-0.5">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted uppercase tracking-wider mt-1 font-inter">
                                        5.0 Customer Satisfaction
                                    </span>
                                </div>
                                <div className="flex -space-x-3">
                                    {[
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                    ].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-black object-cover"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Infinite Scroll Images */}
                    <div className="space-y-8 relative z-10">
                        {/* Row 1: Right to Left */}
                        <div className="relative flex overflow-hidden group mask-linear-gradient">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: [0, -1920] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 40,
                                    ease: "linear",
                                }}
                            >
                                {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((img: string, i: number) => (
                                    <div
                                        key={i}
                                        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden border border-dark"
                                    >
                                        <img
                                            src={img}
                                            alt="Showcase"
                                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Row 2: Left to Right */}
                        <div className="relative flex overflow-hidden group mask-linear-gradient">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: [-1920, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 40,
                                    ease: "linear",
                                }}
                            >
                                {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((img: string, i: number) => (
                                    <div
                                        key={i}
                                        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden border border-dark"
                                    >
                                        <img
                                            src={img}
                                            alt="Showcase"
                                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* THE BENEFITS Section */}
                <section className="py-12 md:py-24 px-4 bg-background">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">

                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-2 leading-tight font-HindMadurai">
                                We deliver <span className="font-InstrumentSerif italic font-normal text-muted">exceptional results</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Row 1: Full Width (Subservice 0) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="col-span-12 group relative bg-background backdrop-blur-sm rounded-3xl pt-6 px-6 md:pt-12 md:px-12 pb-0 flex flex-col md:flex-row items-end gap-12 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 overflow-hidden"
                            >
                                <div className="flex-1 space-y-4 self-center mb-6 md:mb-12">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white font-HindMadurai gradient-text tracking-tight">
                                        {subServices[0]?.title || "High-converting designs"}
                                    </h3>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                        {subServices[0]?.description || "By first understanding your target audience, we craft designs that resonate and connect with them. This creates an emotional bond that builds trust. As a result, conversions become seamless and drive business growth."}
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                                        <img
                                            src={benefitImage || "/assets/logo/High-converting.png"}
                                            alt="Benefit"
                                            className="w-full h-full object-cover transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Row 2 Left: Narrower (Subservice 1) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="col-span-12 md:col-span-5 group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 min-h-[400px]"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai">
                                        Ultra-fast websites
                                    </h3>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                        Experience lightning-fast load times with our optimized websites, delivering a seamless user experience without compromise.
                                    </p>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <div className="w-full h-48 flex items-center justify-center relative overflow-hidden group">
                                        <img
                                            src="/assets/logo/benefit.png"
                                            alt="Ultra-fast websites"
                                            className="w-full h-full object-contain transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Row 2 Right: Wider (Subservice 2 - Tools) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="col-span-12 md:col-span-7 group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 min-h-[400px]"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai">
                                        Tools Integration
                                    </h3>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                        We seamlessly integrate essential tools to enhance your website's functionality, whether it's CRM, chat, or analytics
                                    </p>
                                </div>
                                <div className="mt-8 w-full overflow-hidden">
                                    {/* Row 1: Right to Left */}
                                    <div className="flex mb-4 overflow-hidden mask-linear-gradient">
                                        <motion.div
                                            className="flex gap-4 whitespace-nowrap"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 20,
                                                ease: "linear",
                                            }}
                                        >
                                            {[
                                                // --- Existing Logos (12) ---
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1024px-Google_Sheets_logo_%282014-2020%29.svg.png",
                                                    alt: "Google Sheets",
                                                },
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png",
                                                    alt: "Google Calendar",
                                                },
                                                {
                                                    src: "/assets/logo/Tensorflow.png",
                                                    alt: "Tensorflow",
                                                },
                                                {
                                                    src: "https://framerusercontent.com/images/oPgTqr50Dc4O1PDSqn5V1Hq8.png",
                                                    alt: "GitHub",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
                                                    alt: "Slack",
                                                },
                                                {
                                                    src: "/assets/logo/Framer.png",
                                                    alt: "Framer",
                                                },
                                                {
                                                    src: "/assets/logo/openai3.png", // Local asset
                                                    alt: "OpenAI",
                                                },
                                                {
                                                    src: "/assets/logo/gmail.png", // Local asset
                                                    alt: "Gmail",
                                                },
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                                                    alt: "Figma",
                                                },
                                                // Duplicate for seamless loop
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1024px-Google_Sheets_logo_%282014-2020%29.svg.png",
                                                    alt: "Google Sheets",
                                                },
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png",
                                                    alt: "Google Calendar",
                                                },
                                                {
                                                    src: "/assets/logo/Tensorflow.png",
                                                    alt: "Tensorflow",
                                                },
                                                {
                                                    src: "https://framerusercontent.com/images/oPgTqr50Dc4O1PDSqn5V1Hq8.png",
                                                    alt: "GitHub",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
                                                    alt: "Slack",
                                                },
                                                {
                                                    src: "/assets/logo/Framer.png",
                                                    alt: "Framer",
                                                },
                                                {
                                                    src: "/assets/logo/openai3.png", // Local asset
                                                    alt: "OpenAI",
                                                },
                                                {
                                                    src: "/assets/logo/gmail.png", // Local asset
                                                    alt: "Gmail",
                                                },
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                                                    alt: "Figma",
                                                },
                                            ].map((item, i) => (
                                                <div key={i} className="w-16 h-16 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden p-3">
                                                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Row 2: Left to Right */}
                                    <div className="flex overflow-hidden mask-linear-gradient">
                                        <motion.div
                                            className="flex gap-4 whitespace-nowrap"
                                            animate={{ x: ["-50%", "0%"] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 20,
                                                ease: "linear",
                                            }}
                                        >
                                            {[
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
                                                    alt: "Notion",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/trello.svg",
                                                    alt: "Trello",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
                                                    alt: "Jira",
                                                },
                                                // --- New Logos (6) ---
                                                {
                                                    src: "/assets/logo/Claude.png",
                                                    alt: "Claude AI",
                                                },
                                                {
                                                    src: "/assets/logo/Grok.png",
                                                    alt: "Grok",
                                                },
                                                {
                                                    src: "/assets/logo/Copilot.png",
                                                    alt: "Microsoft Copilot",
                                                },
                                                {
                                                    src: "/assets/logo/Xai.png",
                                                    alt: "xAI",
                                                },
                                                {
                                                    src: "/assets/logo/gemini2.png", // Local asset
                                                    alt: "Gemini",
                                                },
                                                {
                                                    src: "/assets/logo/Google_ai_studio_logo.png",
                                                    alt: "Google AI Studio",
                                                },
                                                // Duplicate for seamless loop
                                                {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
                                                    alt: "Notion",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/trello.svg",
                                                    alt: "Trello",
                                                },
                                                {
                                                    src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
                                                    alt: "Jira",
                                                },
                                                {
                                                    src: "/assets/logo/Claude.png",
                                                    alt: "Claude AI",
                                                },
                                                {
                                                    src: "/assets/logo/Grok.png",
                                                    alt: "Grok",
                                                },
                                                {
                                                    src: "/assets/logo/Copilot.png",
                                                    alt: "Microsoft Copilot",
                                                },
                                                {
                                                    src: "/assets/logo/Xai.png",
                                                    alt: "xAI",
                                                },
                                                {
                                                    src: "/assets/logo/gemini2.png", // Local asset
                                                    alt: "Gemini",
                                                },
                                                {
                                                    src: "/assets/logo/Google_ai_studio_logo.png",
                                                    alt: "Google AI Studio",
                                                },
                                            ].map((item, i) => (
                                                <div key={i} className="w-16 h-16 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden p-3">
                                                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Row 3 Left: Wider (Subservice 3 - SEO) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="col-span-12 md:col-span-7 group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 min-h-[300px]"
                            >
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai">
                                        SEO Optimization
                                    </h3>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                        Our SEO-optimized designs ensure your site ranks high on search engines, driving organic traffic and maximizing visibility.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="relative w-32 h-32 flex items-center justify-center">
                                        <svg className="w-full h-full -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                className="text-white/10"
                                            />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                strokeDasharray={351.86}
                                                strokeDashoffset={351.86 - (351.86 * 100) / 100}
                                                className="text-success"
                                            />
                                        </svg>
                                        <span className="absolute text-3xl font-bold text-success font-HindMadurai">100</span>
                                        <span className="absolute -bottom-8 text-sm text-muted font-inter">On-page Seo</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Row 3 Right: Narrower (Subservice 4) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="col-span-12 md:col-span-5 group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col justify-center shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 min-h-[300px]"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai">
                                        Professional Experience
                                    </h3>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                        Leverage our deep expertise in Webflow to keep your website updated, secure, and performing at its best as your business scales
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* THE NUMBERS Section */}
                <section className="py-12 md:py-24 px-4 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">

                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-2 leading-tight font-HindMadurai">
                                After a website <span className="font-InstrumentSerif italic font-normal text-muted">
                                    Complete
                                </span>,<br />
                                our clients typically experience...
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {/* Stat 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-4xl sm:text-6xl md:text-8xl font-medium gradient-text mb-0 font-HindMadurai flex justify-center items-center">
                                    +<Counter to={90} />%
                                </div>
                                <p className="text-lg md:text-sm text-muted text-[#9ca3af] font-inter uppercase tracking-wide">
                                    User Engagement
                                </p>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="text-4xl sm:text-6xl md:text-8xl font-medium gradient-text mb-0 font-HindMadurai flex justify-center items-center">
                                    +<Counter to={15} />%
                                </div>
                                <p className="text-lg md:text-sm text-muted text-[#9ca3af] font-inter uppercase tracking-wide">
                                    Increased Conversion Rate
                                </p>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="text-4xl sm:text-6xl md:text-8xl font-medium gradient-text mb-0 font-HindMadurai flex justify-center items-center">
                                    +<Counter to={20} />%
                                </div>
                                <p className="text-lg md:text-sm text-muted text-[#9ca3af] font-inter uppercase tracking-wide">
                                    Leads Generated
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO Section */}
                <section className="py-12 md:py-24 px-4 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">

                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-2 leading-tight font-HindMadurai">
                                Featured {" "}
                                <span className="font-InstrumentSerif italic font-normal text-muted">
                                    Category
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                            {portfolioItems[slug as keyof typeof portfolioItems]?.map((item, index) => {
                                const items = portfolioItems[slug as keyof typeof portfolioItems] || [];
                                const count = items.length;
                                let colSpanClass = "md:col-span-3";

                                if (count === 3) {
                                    colSpanClass = "md:col-span-2";
                                } else if (count === 5) {
                                    if (index < 3) {
                                        colSpanClass = "md:col-span-2";
                                    } else {
                                        colSpanClass = "md:col-span-3";
                                    }
                                }

                                return (
                                    <Link
                                        to={`/category/${slug}/${item.title.toLowerCase().replace(/ /g, '-')}`}
                                        key={index}
                                        className={`${colSpanClass} block`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`group cursor-pointer h-full relative bg-background backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500 p-4`}
                                        >
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                            </div>

                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-white font-HindMadurai group-hover:text-white transition-colors">
                                                    {item.title}
                                                </h3>
                                                <span className="text-white font-medium text-sm hover:underline">
                                                    Visit Website
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                {item.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-1.5 rounded-full border border-dark text-muted text-sm font-inter hover:border-white/40 hover:text-white transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* OUR PROCESS Section */}
                <section className="py-12 md:py-24 px-4 bg-background">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            {/* Left: Text */}
                            <h2 className="text-left text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight leading-tight font-HindMadurai">
                                Claim a website{" "}
                                <span className="font-InstrumentSerif italic font-normal text-muted">
                                    Now.
                                </span>
                            </h2>

                            {/* Right: Button */}
                            <div className="flex justify-start lg:justify-end">
                                <GradientButton
                                    title="Claim Now"
                                    link="/claim-your-free-website"
                                />
                            </div>

                        </div>



                        <div className="space-y-8">
                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <span className="text-white font-bold font-HindMadurai">Step 1</span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white font-HindMadurai">
                                            Fill the Form
                                        </h3>
                                        <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                            Fill the form details. After you submit, our team will reach out to you soon to confirm your details.
                                        </p>
                                        <button className="border border-gray-500  group relative flex items-center justify-center text-white font-semibold px-8 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl font-HindMadurai">
                                            <span className="relative z-20 transition-colors duration-700 ">
                                                Get started
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                        <img
                                            src={processImages?.[0] || "/assets/logo/Step-1.png"}
                                            alt="Discovery Call"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <span className="text-white font-bold font-HindMadurai">Step 2</span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white font-HindMadurai">
                                            Attend Zoom Meeting
                                        </h3>
                                        <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                            After completing step 1, our team will mail you a link for an online Zoom meeting. You need to attend to discuss your website idea with us.
                                        </p>
                                        <button className="border border-gray-500  group relative flex items-center justify-center text-white font-semibold px-8 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl font-HindMadurai">
                                            <span className="relative z-20 transition-colors duration-700 ">
                                                Get started
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                        <img
                                            src={processImages?.[1] || "/assets/logo/Step-2.png"}
                                            alt="Work on tasks"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative bg-background backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <span className="text-white font-bold font-HindMadurai">Step 3</span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white font-HindMadurai">
                                            Create UGC Video
                                        </h3>
                                        <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                                            After completing step 2 and receiving your website, you need to make a review UGC video for our company.
                                        </p>
                                        <button className="border border-gray-500 group relative flex items-center justify-center text-white font-semibold px-8 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl font-HindMadurai">
                                            <span className="relative z-20 transition-colors duration-700 ">
                                                Get started
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                        <img
                                            src={processImages?.[2] || "/assets/logo/Step-3.png"}
                                            alt="Launch & Grow"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* AFFORDABLE PLANS Section */}
                <section className="py-12 md:py-24 px-4 bg-black">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-20">

                            <h2 className="text-3xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-2 leading-tight font-HindMadurai">
                                Website <span className="font-InstrumentSerif italic font-normal text-muted">packages</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Starter Package */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-background backdrop-blur-sm rounded-[32px] p-6 md:p-8 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai mb-4">Starter Package</h3>
                                    <div className="text-3xl md:text-4xl font-bold text-white font-HindMadurai mb-4">Free</div>
                                    <p className="text-gray-400 leading-relaxed font-HindMadurai">
                                        A high-converting, single landing page or one pager for specific campaigns, products, or services, optimized for lead generation and mobile responsiveness.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-8"></div>

                                <div className="flex-grow">
                                    <p className="text-gray-400 mb-6 font-HindMadurai">This includes...</p>
                                    <ul className="space-y-4">
                                        {[
                                            "One-Pager Website or Landing Page",
                                            "Comprehensive creation of site architecture and wireframes",
                                            "Mobile-responsive design",
                                            "Interactions",
                                            "Basic on-page SEO",
                                            "Contact form integration"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-white rounded-full p-1">
                                                    <CheckCircle className="w-4 h-4 text-black" />
                                                </div>
                                                <span className="text-gray-300 font-HindMadurai text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full bg-white text-black py-4 rounded-full font-inter font-bold mt-8 hover:bg-gray-200 transition-colors">
                                    Get started today
                                </button>
                            </motion.div>

                            {/* Growth Package */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group relative bg-background backdrop-blur-sm rounded-[32px] p-6 md:p-8 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai mb-4">Growth Package</h3>
                                    <div className="text-3xl md:text-4xl font-bold text-white font-HindMadurai mb-4">$1,000</div>
                                    <p className="text-gray-400 leading-relaxed font-HindMadurai">
                                        Ideal for growing businesses and startups that need a more robust online presence with room to expand.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-8"></div>

                                <div className="flex-grow">
                                    <p className="text-gray-400 mb-6 font-HindMadurai">This includes...</p>
                                    <ul className="space-y-4">
                                        {[
                                            "Multi-page website (5-10 pages)",
                                            "Comprehensive creation of site architecture and wireframes",
                                            "Mobile-responsive design",
                                            "Interactions",
                                            "Content management system (CMS) integration",
                                            "Advanced SEO and performance optimization",
                                            "Contact form integration",
                                            "Reporting and analytics"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-white rounded-full p-1">
                                                    <CheckCircle className="w-4 h-4 text-black" />
                                                </div>
                                                <span className="text-gray-300 font-HindMadurai text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full bg-white text-black py-4 rounded-full font-bold mt-8 hover:bg-gray-200 transition-colors font-HindMadurai">
                                    Get started today
                                </button>
                            </motion.div>

                            {/* Premium Package */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative bg-background backdrop-blur-sm rounded-[32px] p-6 md:p-8 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white font-HindMadurai mb-4">Premium Package</h3>
                                    <div className="text-3xl md:text-4xl font-bold text-white font-HindMadurai mb-4">$3000</div>
                                    <p className="text-gray-400 leading-relaxed font-HindMadurai">
                                        Established businesses looking for a fully customized, high-performing website that drives conversions.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-8"></div>

                                <div className="flex-grow">
                                    <p className="text-gray-400 mb-6 font-HindMadurai">This includes...</p>
                                    <ul className="space-y-4">
                                        {[
                                            "Multi-page website (15-500 pages)",
                                            "Comprehensive creation of site architecture and wireframes",
                                            "Mobile-responsive design",
                                            "Interactions",
                                            "Content management system (CMS) integration",
                                            "Advanced SEO and performance optimization",
                                            "Contact form integration",
                                            "Reporting and analytics"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-white rounded-full p-1">
                                                    <CheckCircle className="w-4 h-4 text-black" />
                                                </div>
                                                <span className="text-gray-300 font-HindMadurai text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full bg-white text-black py-4 rounded-full font-bold mt-8 hover:bg-gray-200 transition-colors font-HindMadurai">
                                    Get started today
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <ContactUsPreviewSection />
            </main>

            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default CategoryDetail;
