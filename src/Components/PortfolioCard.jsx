import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { imageMap } from "../utils/imageMap";

const PortfolioCard = ({ item, index }) => {
  return (
    <div key={index} className="rounded-2xl overflow-hidden">
      {/* image */}
      <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-300 mb-6">
        <img
          src={imageMap[item.image]}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      </div>

      <h3 className="text-2xl text-gray-800 font-heading mb-2 font-bold">
        {item.title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
      {/* link */}

      <div className="flex items-center justify-between">
        <span className="text-accent font-medium">{item.location}</span>
        <FaArrowRight className="text-xl hover:text-accent cursor-pointer transition duration-200" />
      </div>
    </div>
  );
};

export default PortfolioCard;
