import React, { useEffect, useState } from "react";
import SectionHeader from "../Components/SectionHeader";
import { getSiteContent } from "../services/api";
import { iconMap } from "../utils/iconMap";

const Values = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("about");
        setValues(response.data?.values || []);
      } catch (err) {
        setError(err.message || "Unable to load values.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="py-24 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          badge={"Our Values"}
          title={"What"}
          highlight={"Drive Us"}
          description={
            "The core principles that guide every project we undertake."
          }
        />
        {/* Values grid section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => {
            const IconComponent = iconMap[value.icon] || iconMap.FaLightbulb;
            return (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                {/* icon */}
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="text-2xl" />
                </div>
                {/* title */}
                <h4 className="text-gray-700 font-heading mb-4 font-bold text-2xl">
                  {value.title}
                </h4>
                <p className="text-center text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
