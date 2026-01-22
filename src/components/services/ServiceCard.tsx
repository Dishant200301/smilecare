import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    icon: string | ReactNode;
    title: string;
    description: string;
    link?: string;
    iconBgColor?: string;
    iconWrapperClassName?: string; // New prop for custom wrapper sizing
    iconClassName?: string; // New prop for custom icon sizing/styling
}

const ServiceCard = ({
    icon,
    title,
    description,
    link = "#",
    iconBgColor = "bg-blue-50",
    iconWrapperClassName = "w-12 h-12 rounded-[12px]",
    iconClassName = "w-6 h-6"
}: ServiceCardProps) => {
    return (
        <Link to={link} className="block group h-full">
            <div className="
        relative
        bg-white
        rounded-[20px]
        p-6
        shadow-[0_2px_12px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-in-out
        cursor-pointer
        h-full
        flex flex-col
      ">

                {/* Top Section - Icon and Edit */}
                <div className="flex items-start justify-between mb-4">
                    {/* Icon with Background */}
                    <div className={`
            ${iconBgColor}
            ${iconWrapperClassName}
            flex items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
            
          `}>
                        {typeof icon === 'string' ? (
                            <img
                                src={icon}
                                alt={title}
                                className={`${iconClassName} object-contain brightness-0 saturate-100`}
                                style={{ filter: 'invert(36%) sepia(93%) saturate(1352%) hue-rotate(184deg) brightness(95%) contrast(92%)' }}
                            />
                        ) : (
                            <div className={`${iconClassName} text-dental-blue`}>
                                {icon}
                            </div>
                        )}
                    </div>


                </div>

                {/* Title - 2 Lines */}
                <h3 className="
          font-playfair font-bold
          text-[#1a1a1a]
          text-[18px] lg:text-[24px]
          leading-[1.4]
          line-clamp-2
          min-h-[44px]
          transition-colors duration-300
          group-hover:text-gradient-blue-start
        ">
                    {title}
                </h3>

                {/* Description - 3 Lines */}
                <p className="
          font-roboto font-normal
          text-[#6b7280]
          text-[14px] lg:text-[15px]
          leading-[1.6]
          mb-5
          line-clamp-3
          min-h-[72px]
          flex-grow
        ">
                    {description}
                </p>

                {/* Learn More Button - Full Width, Centered */}
                <button className="
          w-full
          py-2.5
          rounded-full
          bg-[#eef1f6]
          font-roboto font-medium
          text-[#1a1a1a]
          text-[14px] lg:text-[15px]
          text-center
          transition-all duration-100 ease-in-out
          group-hover:bg-gradient-to-br group-hover:from-gradient-blue-start group-hover:to-gradient-blue-end
          group-hover:text-white
          group-hover:shadow-[0_4px_12px_rgba(29,112,184,0.3)]
     
        ">
                    Learn more
                </button>
            </div>
        </Link>
    );
};

export default ServiceCard;
