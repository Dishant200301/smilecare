import { motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  X,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the automation system help my clinic or business?",
    answer:
      "Our automation platform streamlines your entire workflow — from capturing leads, sending reminders, and managing bookings, to improving patient engagement and maximizing revenue.",
  },
  {
    question: "Can the system send automated reminders to my customers?",
    answer:
      "Yes! The system sends smart reminders via SMS, email, or WhatsApp at the right time, reducing no-shows and improving appointment attendance.",
  },
  {
    question: "Is this solution suitable for my industry?",
    answer:
      "Absolutely. Our services are tailored for multiple industries, including clinics, dentists, gyms, spas, salons, IT & SaaS, and business consultants.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "Not at all. Our platform is designed to be user-friendly and fully automated. Once set up, it runs seamlessly in the background while you focus on your business.",
  },
  {
    question: "How quickly can I see results after using your system?",
    answer:
      "Most clients start noticing improvements within the first few weeks — such as more engaged leads, increased consultation bookings, and higher patient or client attendance rates.",
  },
];

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = (): void => {
    console.log("Navigate to contact page");
  };

  return (
    <section className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto space-y-20">
        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extralight mb-3 pb-2 bg-[#ffffff] bg-clip-text text-transparent text-center font-playfair leading-[1.3]">
              Frequently Asked{" "}
              <span className="text-transparent bg-[#8caac8] bg-clip-text">
                Questions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              Find quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq: FAQItem, index: number) => (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#0d0d0d] border-purple-300/30 shadow-2xl shadow-purple-500/10"
                    : "bg-[#0d0d0d] border-slate-700/50 hover:bg-white/8 hover:border-[#262626]"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center px-8 py-4 transition-colors duration-300 focus:outline-none group"
                  onClick={() => handleToggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h4 className="text-lg font-extralight font-playfair text-white text-left group-hover:text-[#8caac8] transition-colors duration-300 normal-case">
                    {faq.question}
                  </h4>

                  <motion.div
                    className={`ml-4 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      openIndex === index ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="px-8 py-6 text-slate-200 text-base leading-relaxed border-t border-slate-700/30"
                    id={`faq-answer-${index}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8caac8] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-normal text-gray-300 normal-case">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Help CTA */}
        <div className="bg-[#0d0d0d] rounded-lg mt-6 mb-4 p-4 sm:px-8 w-full max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Content */}
            <div className="text-white font-medium text-lg text-center sm:text-left">
              <span className="hidden sm:inline">
                Excited? Us too. Let's get moving.
              </span>
              <span className="sm:hidden text-base font-semibold">
                Schedule a call
              </span>
            </div>

            {/* Button */}
            <button className="bg-[#8caac8] text-black px-4 sm:px-6 py-2 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 text-sm">
              <span className="hidden sm:inline">Schedule a call</span>
              <span className="sm:hidden text-base font-bold">Book</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video h-4 w-4"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
