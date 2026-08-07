import React from "react";

const PageHero = ({
  title,
  highlight,
  description,
  fromColor = "from-primary",
  toColor = "to-secondary",
}) => {
  return (
    <div className={`py-24 pt-32 bg-gradient-to-r ${fromColor} ${toColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gray-800 mb-4">
            {title} <span className="text-accent">{highlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
