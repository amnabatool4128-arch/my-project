import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { getSiteContent } from "../services/api";
import { iconMap } from "../utils/iconMap";

const Feature = () => {
  const [features, setFeatures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("home");
        setFeatures(response.data?.content?.features || null);
      } catch (err) {
        setError(err.message || "Unable to load features.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-gray-600">Loading...</div>;
  }

  if (error || !features) {
    return <div className="py-20 text-center text-red-600">{error || "Unable to load features."}</div>;
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Seaction Header */}
        <SectionHeader
          badge={"Why Chose Us"}
          title={"Premium"}
          highlight={"Design Solution"}
          description={
            "We combine creativity with functionality to deliver exceptional home modeling experiences."
          }
        />

        {/* Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || iconMap.FaLightbulb;
            return (
            <div
              key={idx}
              className="bg-secondary p-8 rounded-2xl hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6">
                <IconComponent className="text-2xl" />
              </div>
              <h3 className="text-gray-800 font-heading font-bold mb-4 text-2xl ">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
