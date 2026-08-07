import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCheck, FaCube, FaDraftingCompass, FaExpandArrowsAlt, FaHardHat, FaLeaf, FaPaintRoller } from "react-icons/fa";
import { getServices } from "../services/api";

const iconMap = {
  FaCube,
  FaDraftingCompass,
  FaExpandArrowsAlt,
  FaHardHat,
  FaLeaf,
  FaPaintRoller,
};

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getServices();
        console.log("Services API Response:", response);
        setServices(response?.data || []);
      } catch (err) {
        setError(err.message || "Unable to load services right now.");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || FaCube;
    return <IconComponent className="text-2xl" />;
  };
  

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {loading ? (
          <div className="text-center text-gray-600">Loading services...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service._id || idx}
                className="bg-secondary rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in"
              >
                <div className="w-16 h-16 bg-accent rounded-full text-white flex items-center justify-center mb-6">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-4 mb-6">
                  {(service.features || []).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-gray-600"
                    >
                      <FaCheck className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-2 bg-accent text-white rounded-full cursor-pointer flex items-center gap-2">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">No services available right now.</div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
