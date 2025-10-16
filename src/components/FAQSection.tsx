import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which operating systems does your software support?",
    answer:
      "Our product seamlessly operates on popular operating systems such as Windows, macOS, and Linux, providing a compatible experience for users across different platforms.",
  },
  {
    question: "Do you have an affiliate program?",
    answer:
      "Yes! We offer a comprehensive affiliate program with competitive commission rates. Partners can earn recurring revenue by referring customers to our platform.",
  },
  {
    question: "How can I renew my product license?",
    answer:
      "You can easily renew your license through your account dashboard. Simply navigate to the billing section and follow the renewal prompts. We'll send you reminders before your license expires.",
  },
  {
    question: "Is there a mobile app available for your software?",
    answer:
      "Yes, we offer native mobile applications for both iOS and Android devices, allowing you to access key features on the go with a seamless mobile experience.",
  },
];

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [questionText, setQuestionText] = useState<string>(""); // State for the question input

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-20 px-6 overflow-hidden flex items-center justify-center">
      {/* Background gradient effects */}
     

      {/* Main content */}
      <div className="relative max-w-[1225px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start z-10">
        {/* Left Side: Header Section */}
        <div className="lg:col-span-2 lg:sticky lg:top-24">
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-4">
            Have Questions?
            <br />
            <span className="text-2xl sm:text-5xl md:text-6xl lg:text-5xl gradient-text font-InstrumentSerif italic text-white ">
              Let’s Talk.
            </span>{" "}
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
            Can't find what you're looking for in our FAQs? Feel free to ask us
            directly.
          </p>
          <textarea
            className="w-full h-16 p-4 rounded-xl mb-4 bg-[#1a1a1a] text-white border border-slate-600 focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors duration-300 resize-y"
            placeholder="Type your question here..."
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          ></textarea>

          <button
            onClick={() => console.log("Contact Us clicked")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-gray-600 text-white hover:border-gray-500 transition-all duration-300"
          >
            <span className="text-sm font-medium">Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:col-span-3 space-y-4">
          {faqs.map((faq: FAQItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#000000] border-gray-700"
                  : "bg-[#000000] border-gray-800 hover:border-gray-700"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 transition-colors duration-300 focus:outline-none group"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 className="text-base font-medium text-white text-left pr-4 font-HindMadurai">
                  {faq.question}
                </h4>

                <div
                  className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white text-black"
                      : "bg-gray-950 text-gray-400 group-hover:bg-[#262626]"
                  }`}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="px-6 pb-6 text-gray-300 text-sm leading-relaxed"
                  id={`faq-answer-${index}`}
                >
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
