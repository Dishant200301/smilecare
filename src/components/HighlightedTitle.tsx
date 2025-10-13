// src/components/HighlightedTitle.tsx
import React from 'react';

interface HighlightedTitleProps {
  text: string;
  highlight: string;
  className?: string;
}

const HighlightedTitle: React.FC<HighlightedTitleProps> = ({ 
  text, 
  highlight, 
  className = "mb-6 text-4xl md:text-5xl font-extralight font-playfair text-white" 
}) => {
  const renderHighlightedText = () => {
    if (!highlight || !text.includes(highlight)) {
      return text;
    }

    const parts = text.split(highlight);
    
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="mb-6 text-4xl md:text-5xl font-extralight font-playfair text-[white]">
                {highlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <h2 className={className}>
      {renderHighlightedText()}
    </h2>
  );
};

export default HighlightedTitle;
