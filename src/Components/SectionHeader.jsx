import React from "react";

const SeactionHeader = ({ badge, title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      <div className="inline-block px-6 py-2 rounded-full mb-4 bg-accent-light text-accent">
        {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-heading mb-4">
        {title} <span className="text-accent">{highlight}</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SeactionHeader;
