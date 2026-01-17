import { Building2, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="relative bg-[#FDABB7] overflow-hidden pt-10 pb-12 sm:pt-14 lg:pt-20">

  {/* CURVE TOP */}
  <div className="absolute top-0 left-0 right-0 z-[5] pointer-events-none">
    <img
      src="/image/hero-bg-3.png"
      alt=""
      className="w-full object-cover"
    />
  </div>

  {/* LIQUID BLOB BG SHAPE */}
  <div className="absolute left-[92.5px] right-0 top-[60px] bottom-[205px] z-[5] opacity-40">
    <img
      src="/image/footer-bg.png"
      className="w-full h-full object-cover  hidden md:block lg:block"
      alt="footer pattern"
    />
  </div>

  {/* MAIN CONTENT */}
  <div className="relative z-[20] container mx-auto px-6 max-w-[1425px]">

    {/* CONTACT HEADER */}
    <div className="text-center mb-12 sm:mb-14 lg:mb-20">
      <h2
        className="font-playfair text-[#333C4A]
                   text-[28px] sm:text-[34px] lg:text-[40px]
                   tracking-[-1px]">
        Contact Us
      </h2>

      <p
        className="font-playfair font-bold text-white
                   text-[38px] sm:text-[54px] lg:text-[80px]
                   tracking-[-2px] leading-tight
                   mt-2 drop-shadow-[0_6px_10px_rgba(0,0,0,0.15)]">
        +36 55 540 069
      </p>
    </div>

    {/* CONTACT BLOCKS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">

      {/* BLOCK 1 */}
      <div className="flex items-center sm:items-center lg:items-center flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 text-white">
        <img
          src="/image/icon/footer-icon-1.png"
          className="w-[48px] sm:w-[55px] lg:w-[60px]"
        />
        <div>
          <h4 className="font-playfair text-[20px] sm:text-[22px]">Our Address</h4>
          <p className="font-roboto text-[14px] sm:text-[15px] opacity-90 leading-[20px]">
            Deák Ferenc street 19<br />
            Budapest, 1052 Hungary
          </p>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="flex items-center sm:items-center lg:items-center flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 text-white">
        <img
          src="/image/icon/footer-icon-2.png"
          className="w-[48px] sm:w-[55px] lg:w-[60px]"
        />
        <div>
          <h4 className="font-playfair text-[20px] sm:text-[22px]">Email Us</h4>
          <p className="font-roboto text-[14px] sm:text-[15px] opacity-90 leading-[20px]">
            office@denticare.com<br />
            help@denticare.com
          </p>
        </div>
      </div>

      {/* BLOCK 3 */}
      <div className="flex items-center sm:items-center lg:items-center flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 text-white">
        <img
          src="/image/icon/footer-icon-3.png"
          className="w-[48px] sm:w-[55px] lg:w-[60px]"
        />
        <div>
          <h4 className="font-playfair text-[20px] sm:text-[22px]">Working Hours</h4>
          <p className="font-roboto text-[14px] sm:text-[15px] opacity-90 leading-[20px]">
            Monday – Friday: 8AM – 9PM<br />
            Weekends: Closed
          </p>
        </div>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-white/30 pt-6 sm:pt-8"></div>

    {/* COPYRIGHT + LINKS */}
    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-white font-roboto text-[13px] sm:text-[15px] opacity-80 text-center md:text-left">
        Copyright 2018 by BoldThemes. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 text-white font-roboto text-[14px] opacity-90">
        <a href="#" className="hover:opacity-100">About us</a>
        <a href="#" className="hover:opacity-100">Services</a>
        <a href="#" className="hover:opacity-100">Pages</a>
        <a href="#" className="hover:opacity-100">Portfolio</a>
        <a href="#" className="hover:opacity-100">News</a>
        <a href="#" className="hover:opacity-100">Shop</a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:opacity-100 flex items-center gap-1"
        >
          ↑ Back to top
        </button>
      </div>

    </div>
  </div>
</footer>


  );
};

export default Footer;
