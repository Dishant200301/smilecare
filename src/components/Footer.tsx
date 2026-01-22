import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 lg:py-24 border-t border-gray-100">
      <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 lg:gap-8">

          {/* Left Side - Brand Promise */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 lg:space-y-8">
            {/* Logo Icon */}
            <Link to="/" className="flex items-center gap-2.5 mr-4 lg:mr-12 shrink-0 group" >
              <div className="w-12 h-12 md:w-16 md:h-16 flex rounded-full bg-dental-blue/10 items-center justify-center p-3">
                <img src="/image/favicon.png" alt="SmileCare" className="w-8 h-8 md:w-10 md:h-10 " />
              </div>
            </Link>

            <div className="space-y-2">
              <h2 className="font-playfair font-bold text-2xl md:text-4xl lg:text-5xl text-dental-dark leading-tight">
                Brighter smiles.
              </h2>
              <h2 className="font-playfair font-bold text-2xl md:text-4xl lg:text-5xl text-dental-dark leading-tight">
                Brighter lives.
              </h2>
            </div>
          </div>

          {/* Right Side - Navigation & Contact */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-12 lg:gap-8">

            {/* Column 1 - Company */}
            <div className="space-y-6">
              <h3 className="font-playfair font-medium text-lg text-muted-foreground">
                Other Links
              </h3>
              <nav className="flex flex-col space-y-4">
                <Link to="/about" className="font-label text-dental-dark hover:text-dental-blue transition-colors">
                  About us
                </Link>
                <Link to="/services" className="font-label text-dental-dark hover:text-dental-blue transition-colors">
                  Services
                </Link>
                <Link to="/blog" className="font-label text-dental-dark hover:text-dental-blue transition-colors">
                  Blog
                </Link>
                <Link to="/contact" className="font-label text-dental-dark hover:text-dental-blue transition-colors">
                  Contact us
                </Link>
              </nav>
            </div>

            {/* Column 2 - Contact Info */}
            <div className="space-y-6">
              <h3 className="font-playfair font-medium text-lg text-muted-foreground">
                Smilebright
              </h3>

              <div className="space-y-4 font-roboto text-dental-dark">
                <div className="space-y-1">
                  <p>527 Crentist Ave</p>
                  <p>Lehi UT 84043</p>
                </div>

                <div className="space-y-1 pt-2">
                  <p className="flex items-center gap-2">
                    <a href="tel:801-555-1234" className="text-dental-pink hover:underline">801-555-1234</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <a href="mailto:hi@dentist.com" className="text-dental-pink hover:underline">hi@dentist.com</a>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Section - Copyright & Developer Credit */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-roboto text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmileCare. All rights reserved.
          </p>  
          <p className="font-roboto text-sm text-muted-foreground">
            Developed by <a href="https://tryzeniq.com/" target="_blank" rel="noopener noreferrer" className="text-dental-pink hover:underline font-medium">TryzenIQ</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
