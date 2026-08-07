import React, { useEffect, useState } from "react";
import SeactionHeader from "./SectionHeader";
import { getSiteContent } from "../services/api";
import { FaStar } from "react-icons/fa";
import { imageMap } from "../utils/imageMap";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("home");
        setTestimonials(response.data?.content?.testimonials || null);
      } catch (err) {
        setError(err.message || "Unable to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-gray-600">Loading...</div>;
  }

  if (error || !testimonials) {
    return <div className="py-20 text-center text-red-600">{error || "Unable to load testimonials."}</div>;
  }

  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <SeactionHeader
          badge={"Client Story"}
          title={"What Our"}
          highlight={"Client Say"}
          description={
            "Hear from homeowners who transformed their living spaces with our designs."
          }
        />

        {/*Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="fade-in bg-white p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/*Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={imageMap[item.image] || imageMap.user1Image}
                  alt={item.name}
                />
                <div>
                  <h4 className="font-heading text-gray-800 font-bold">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{item.role}</p>
                </div>
              </div>
              {/* description*/}
              <p className="text-gray-600 mb-4 text-sm">{item.quote}</p>

              {/* Stars */}
              <div className="flex text-yellow-400">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
