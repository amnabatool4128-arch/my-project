import React from "react";

const PortfolioFilter = ({ active, setActiveFilter, filters = [] }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full font-medium transition duration-200 cursor-pointer ${
              active === filter
                ? "bg-accent text-white"
                : "bg-accent-light text-accent hover:bg-accent hover:text-white"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
