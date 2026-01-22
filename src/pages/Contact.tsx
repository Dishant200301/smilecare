import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import HomeContact from "@/components/HomeContact";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Activity, Phone, Mail, MapPin } from "lucide-react";

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
    <div className="min-h-screen bg-white ">
      {/* Page Header */}
      <section className="pt-16 sm:pt-20 pb-0 lg:pt-24 lg:pb-0 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto mt-12 px-2 sm:px-4 md:px-6 lg:px-0">
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

      {/* Main Content - 2 Column Layout on Desktop */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* LEFT COLUMN: Contact Cards - 40% width and sticky on laptop */}
            {/* Order: 2 on mobile/tablet (shows second), 1 on laptop (shows first/left) */}
            <div className="w-full lg:w-[40%] lg:sticky lg:top-32 lg:self-start space-y-4 sm:space-y-6 order-2 lg:order-1">
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
                      rounded-2xl sm:rounded-3xl p-6 sm:p-8
                      transition-all duration-300
                      border border-[#e7ebf1]
                      group
                      overflow-hidden
                      flex items-start justify-between gap-3 sm:gap-4
                      
                    `}
                  >
                    {/* Map Background for Visit us card */}
                    {contact.hasMap && (
                      <div className="absolute inset-0 opacity-10 transition-opacity duration-300">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7364524421!2d-111.8507!3d40.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzI5LjgiTiAxMTHCsDUxJzAyLjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="pointer-events-none"
                        ></iframe>
                      </div>
                    )}

                    {/* Left: Title and Info */}
                    <div className="flex-1 relative z-10">
                      <h3 className="font-playfair text-xl sm:text-2xl font-bold text-slate-700 mb-1 sm:mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 transition-colors duration-300">
                        {contact.info}
                      </p>
                    </div>

                    {/* Right: Icon Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-sm transition-shadow duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1D70B8]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Contact Form - 60% width */}
            {/* Order: 1 on mobile/tablet (shows first), 2 on laptop (shows second/right) */}
            <div className="w-full lg:w-[60%] bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-10 order-1 lg:order-2">


              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 leading-tight">
                Reach out for questions
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.
              </p>

              {/* Form */}
              <form className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter Your Name"
                    className="h-11 sm:h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      className="h-11 sm:h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter Your Number"
                      className="h-11 sm:h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-semibold text-[#1e293b]">
                    Message
                  </label>
                  <Textarea
                    placeholder="Write Message..."
                    className="min-h-[120px] sm:min-h-[140px] bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 h-11 sm:h-12 bg-[#1D70B8] hover:bg-[#1557a0] text-white font-roboto font-semibold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width Below */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">


            {/* Heading */}
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4 sm:mb-6">
              Get in touch with us
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            {/* Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full sm:h-[400px] lg:h-[500px]"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
