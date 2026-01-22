import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        id: 1,
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist every six months for regular check-ups and cleanings. This helps prevent cavities, gum disease, and other dental issues before they become serious."
    },
    {
        id: 2,
        question: "What should I do in a dental emergency?",
        answer: "If you have a dental emergency, contact us immediately. If you have knocked out a tooth, keep it moist in milk or saliva and see us within an hour for the best chance of saving it."
    },
    {
        id: 3,
        question: "Do you offer cosmetic dentistry services?",
        answer: "Yes, we offer a wide range of cosmetic services including teeth whitening, veneers, and bonding to help you achieve the smile you've always wanted."
    },
    {
        id: 4,
        question: "How can I improve my oral hygiene at home?",
        answer: "Brush twice a day with fluoride toothpaste, floss daily, and use mouthwash. Limiting sugary snacks and drinks also plays a crucial role in maintaining healthy teeth and gums."
    },
];

const FaqSection = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-2 lg:px-0">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-10">
                    <h2 className="font-playfair text-2xl sm:text-5xl lg:text-[46px] max-w-[600px] font-semibold text-[#1E2024] tracking-tight leading-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqData.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                initial={false}
                                onClick={() => toggle(item.id)}
                                className={`cursor-pointer rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[40px] overflow-hidden border transition-all duration-300 ${isOpen
                                    ? "bg-white border-transparent shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]"
                                    : "bg-[#F3F6FA] border-transparent hover:bg-[#EEF2F6]"
                                    }`}
                            >
                                <div className={`p-6 sm:p-6 md:p-6 flex justify-between items-start sm:items-center gap-4 ${isOpen ? "pb-4" : ""}`}>
                                    <h3
                                        className={`text-base sm:text-lg md:text-xl font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#1E2024]" : "text-[#1E2024]/80"
                                            }`}
                                    >
                                        {item.question}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                                            ? "bg-[#e4eefa] text-[#1E2024]"
                                            : "bg-white text-[#1E2024] shadow-sm"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <X className="md:w-5 md:h-5 w-4 h-4" />
                                        ) : (
                                            <Plus className="md:w-5 md:h-5 w-4 h-4" />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 sm:px-6 pb-6 sm:pb-8">
                                                <p className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
