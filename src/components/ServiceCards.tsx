import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Accommodations",
      link: "#",
      img: "https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2025/06/home-service-1.avif",
      // Distinct organic shape for Card 1
      radius: "58% 42% 47% 53% / 46% 41% 59% 54%",
      // Your specific background positioning
      bgPos: { left: '16.41%', right: '7.42%', top: '6.72%', bottom: '9.19%' }
    },
    {
      id: 2,
      title: "Sightseeing",
      link: "#",
      img: "https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2025/06/home-service-2.avif",
      radius: "45% 55% 40% 60% / 55% 30% 70% 45%",
      bgPos: { left: '5.55%', right: '8.31%', top: '7.02%', bottom: '6.2%' }
    },
    {
      id: 3,
      title: "Bars & Pubs",
      link: "#",
      img: "https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2025/06/home-service-3.avif",
      radius: "51% 49% 55% 45% / 40% 55% 45% 60%",
      bgPos: { left: '6.91%', right: '8.19%', top: '10.82%', bottom: '3.21%' }
    },
    {
      id: 4,
      title: "Transport",
      link: "#",
      img: "https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2025/06/home-service-4.avif",
      radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      bgPos: { left: '8.56%', right: '19.8%', top: '8.99%', bottom: '6.39%' }
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* 
            Responsive Grid Logic:
            - grid-cols-1 : Mobile (1 card)
            - md:grid-cols-2 : Tablet (2 cards)
            - lg:grid-cols-4 : Laptop/Desktop (4 cards)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">

              {/* Image Container Wrapper */}
              <div className="relative w-full max-w-[280px] aspect-square mb-8 cursor-pointer">

                {/* 1. Pink Background Blob 
                    Moves slightly and scales on hover to create depth 
                */}
                <div
                  className="absolute bg-[#fdabb7] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    ...item.bgPos,
                    borderRadius: item.radius,
                  }}
                />

                {/* 2. Main Image Mask 
                    This holds the image and clips it to the blob shape 
                */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden bg-gray-100 shadow-md transition-all duration-500"
                  style={{ borderRadius: item.radius }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* 3. Overlay Content (Buttons) */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    {/* Plus Button (Visible initially, fades out on hover) */}
                    <div className="absolute transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-50 opacity-100 scale-100">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fdabb7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>

                    {/* View More Button (Hidden initially, slides up on hover) */}
                    <div className="absolute transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-8">
                      <a href={item.link} className="bg-[#fdabb7] text-white px-6 py-3 rounded-md shadow-lg flex items-center space-x-2 font-medium hover:bg-[#ff9aa8] transition-colors">
                        <span>View more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              {/* Title Section with Underline Decoration */}
              <div className="text-center z-20">
                <h3 className="text-[26px] font-serif font-medium text-[#333c4a] relative inline-block group-hover:text-[#fdabb7] transition-colors duration-300">
                  {item.title}
                  {/* Optional underline animation */}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#fdabb7] transition-all duration-500 group-hover:w-full"></span>
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;