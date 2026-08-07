import React, { useEffect, useState } from "react";
import { FaAward, FaCalendar, FaPlayCircle, FaTrophy } from "react-icons/fa";
import { getSiteContent } from "../services/api";
import { imageMap } from "../utils/imageMap";

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  const loadContent = async () => {
    try {
      const response = await getSiteContent("home");

      
    

      setHero(response.data?.content?.hero || null);

    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to load hero content.");
    } finally {
      setLoading(false);
    }
  };

  loadContent();

 }, []);
  if (loading) {
    return <div className="py-20 text-center text-gray-600">Loading...</div>;
  }

  if (error || !hero) {
    return <div className="py-20 text-center text-red-600">{error || "Unable to load hero content."}</div>;
  }

  const heroImage = imageMap[hero.image?.src] || imageMap.heroImage;

  return (
    <div className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* left side */}
        <div>
          {/* badge */}
          <div className="inline-block items-center px-4 py-2 bg-accent-light rounded-full text-accent mb-6">
            <div className="flex items-center gap-2 text-sm">
              <FaAward />
              {hero.badge}
            </div>
          </div>

          {/* Section Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading text-gray-800">
            {hero.title.normal} {""}
            <span className="text-accent">{hero.title.highlight}</span>
            {hero.title.end}
          </h1>
          {/* Summary */}
          <p className="text-gray-600 text-lg max-w-xl mb-10">
            {hero.description}
          </p>
          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-accent text-white rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent-hover hover:-translate-y-0.5">
              <FaCalendar />
              Book Consultation
            </button>

            <button className="px-8 py-3 border-2 border-accent hover:bg-accent-light text-accent rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 bg-transparent">
              <FaPlayCircle />
              View Projects
            </button>
          </div>
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            {hero.stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-gray-800 font-bold font-heading text-3xl">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right side image */}
        <div className="py-20">
          <div className="relative">
            {/* Image */}
            <div className="bg-accent-light rounded-3xl p-2 shadow-2xl overflow-hidden">
              <img
                className="rounded-3xl w-full hover:scale-105 transition-transform duration-500"
                src={heroImage}
                alt={hero.image.alt}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl w-64">
              <div className="flex-items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <FaTrophy className="text-white text-xl" />
                </div>
                <h4 className="font-heading font-bold text-gray-800">
                  Design Excellence
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                2026 International Design Award Winner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
