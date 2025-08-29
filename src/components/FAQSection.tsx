import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
        {
          question: "About Galao",
          answer:
            "Galao is a vibrant blog offering insightful content on culture, lifestyle, and personal development. We aim to inspire and empower readers with practical advice, fresh ideas, and engaging stories."
        },
        {
          question: "Subscriptions",
          answer:
            "Stay connected with Galao by subscribing to our newsletter. Receive regular updates on new articles, exclusive content, and special offers."
        },
        {
          question: "Contribute to Galao",
          answer:
            "Want to share your voice with Galao? We welcome guest posts, articles, and creative contributions. Visit our Contribute page for guidelines."
        },
        {
          question: "Website Help & Support",
          answer:
            "If you need help navigating Galao, our Help & Support section is here to assist. You can also reach out via our Contact page."
        }
      ];
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-16 px-6">
         <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-[#f0ff8b] bg-clip-text text-transparent mb-6 animate-fade-in-up delay-20">
            FAQ
          </h2>
          
          <h2 className="text-3xl sm:text-4xl font-[200] leading-tight mb-10" style={{ fontFamily: 'Satoshi' }}>
            All the answers you need: <br />
            <span className="text-gray-200">
              a comprehensive FAQ for our visitors
            </span>
          </h2>
        </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md">
            {/* Button */}
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-[#374a34]  origin-top transition-colors"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h5 className="text-lg font-medium text-white">
                {faq.question}
              </h5>
              <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-[#f0ff8b] text-white hover:bg-[#f0ff8b] hover:text-black ">
                {openIndex === index ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>

            {/* Answer with Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-800 text-gray-300 text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
