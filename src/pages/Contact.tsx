import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, ChevronDown } from "lucide-react";
import { DotLottiePlayer } from '@dotlottie/react-player';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call us",
      info: "801-555-1234",
      link: "tel:8015551234",
      bgColor: "bg-slate-50"
    },
    {
      icon: Mail,
      title: "Email us",
      info: "hello@smilebright.com",
      link: "mailto:hello@smilebright.com",
      bgColor: "bg-slate-50"
    },
    {
      icon: MapPin,
      title: "Visit us",
      info: "527 Crentist Ave, Lehi",
      link: "https://maps.google.com/?q=527+Crentist+Ave+Lehi",
      bgColor: "bg-slate-50",
      hasMap: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="pt-16 sm:pt-20 pb-0 lg:pt-24 lg:pb-0 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto mt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Centered Form with Illustrations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl xl:max-w-8xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 xl:gap-0 items-center">

            {/* Left Side: Contact Form */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-10 order-1 lg:order-1">
              <div className="text-center mb-10">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 leading-tight">
                  Reach out for questions
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  We take the time to understand your individual needs and goals.
                </p>
              </div>

              <form className="space-y-5 sm:space-y-6 text-left">
                {/* Row 1: Name Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm sm:text-sm font-semibold text-[#1e293b]">First Name <span className="text-red-500">*</span></label>
                    <Input placeholder="John" required className="h-11 sm:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#165e99] focus:ring-2 focus:ring-[#165e99]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm sm:text-sm font-semibold text-[#1e293b]">Last Name <span className="text-red-500">*</span></label>
                    <Input placeholder="Doe" required className="h-11 sm:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#165e99] focus:ring-2 focus:ring-[#165e99]/20" />
                  </div>
                </div>

                {/* Row 2: Phone & Email Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">Phone No. <span className="text-red-500">*</span></label>
                    <Input type="tel" placeholder="(555) 000-0000" required className="flex-1 h-11 sm:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#165e99] focus:ring-2 focus:ring-[#165e99]/20" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">Email <span className="text-red-500">*</span></label>
                    <Input type="email" placeholder="email@example.com" required className="h-11 sm:h-12 bg-slate-50 border-slate-200 rounded-xl focus:border-[#165e99] focus:ring-2 focus:ring-[#165e99]/20" />
                  </div>
                </div>

                {/* Row 5: Message */}
                <div className="space-y-2">
                  <label className="block text-sm sm:text-sm font-semibold text-[#1e293b]">Message <span className="text-red-500">*</span></label>
                  <Textarea placeholder="Tell us about your dental needs..." required className="min-h-[120px] bg-slate-50 border-slate-200 rounded-xl focus:border-[#165e99] focus:ring-2 focus:ring-[#165e99]/20 resize-none" />
                </div>

                {/* Row 6: Submit */}
                <Button type="submit" className="w-full h-12 bg-[#165e99] rounded-3xl hover:bg-[#1557a0] text-white font-bold shadow-lg hover:shadow-xl transition-all text-base">
                  Book Appointment
                </Button>
              </form>
            </div>

            {/* Right Side: Lottie Animation (Pink & Black Theme) */}
            <div className="hidden lg:block order-2 lg:order-2 p-8" style={{ filter: "grayscale(100%) sepia(100%) hue-rotate(165deg) saturate(500%) contrast(1.1)" }}>
              <DotLottiePlayer
                src="https://lottie.host/eea26a2a-12be-4dc5-aeb2-1a7921d418c3/A1abMHfgZz.lottie"
                loop
                autoplay
                className="w-full h-auto max-w-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moved Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.hasMap ? "_blank" : undefined}
                  rel={contact.hasMap ? "noopener noreferrer" : undefined}
                  className={`
                      ${contact.bgColor}
                      relative
                      rounded-3xl p-6 sm:p-10
                      transition-all duration-300
                      border border-[#e7ebf1]
                      group
                      flex flex-row items-center justify-between text-left gap-4
                      bg-[#f8fafc]
                    `}
                >
                  {/* Left: Title and Info */}
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-slate-800 mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-800 transition-colors">
                      {contact.info}
                    </p>
                  </div>

                  {/* Right: Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex shrink-0 items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#165e99] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 sm:mb-6">
              Find Us on Map
            </h2>
          </div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] lg:h-[500px]"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
