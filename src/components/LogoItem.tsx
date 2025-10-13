import React from 'react';

interface LogoItemProps {
  src: string;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt }) => {
  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex-shrink-0">
      {/* Dark BG */}
      <div className="absolute inset-0 rounded-[24px] bg-card-bg-dark border-[0.5px] border-white/10"></div>
      {/* Overlay with radial gradient and border */}
      <div className="absolute inset-0 rounded-[24px] bg-radial-gradient-overlay border-[0.4px] border-white/10 shadow-lg flex items-center justify-center">
        {/* Logo Image */}
        <img
          decoding="async"
          sizes="88px"
          src={src}
          alt={alt}
          className="block w-full h-full p-4 object-contain"
          style={{ borderRadius: 'inherit', objectPosition: 'center' }}
        />
      </div>
    </div>
  );
};

export default LogoItem;
