
import React from 'react';
import { ArrowRight } from './icons/ArrowRight';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="w-[350px] flex-shrink-0 snap-start">
      <a
        href={link}
        className="group relative block bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 ease-in-out transform border border-gray-800 hover:border-cyan-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-150 ease-in-out">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 h-16">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-150 ease-in-out">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1" />
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
