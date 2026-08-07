import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getSiteContent } from "../services/api";
import { imageMap } from "../utils/imageMap";

const Story = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("about");

        const storyData = response.data?.content?.story;


        setStory(storyData || null);
      } catch (err) {
        setError(err.message || "Unable to load story content.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-gray-600">Loading...</div>;
  }

  if (error || !story) {
    return <div className="py-24 text-center text-red-600">{error || "Unable to load story content."}</div>;
  }

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <div className="fade-in">
          {/* badge */}
          <span className="px-4 py-2 bg-accent-light text-accent rounded-full">
            {story.badge}
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-heading mb-6 mt-6">
            Our <span className="text-accent">{story.title}</span>
          </h2>

          {/* Paragraph */}
          {story.paragraphs.map((text, idx) => (
            <p key={idx} className=" text-gray-600 mb-6">
              {text}
            </p>
          ))}
          {/* CTA button */}
          <button className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-full hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-accent-hover cursor-pointer hover:shadow-lg">
            Meet Our Team
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side Image */}
        <div className="fade-in">
          <div className="bg-accent-light rounded-3xl p-2 overflow-hidden shadow-2xl">
            <img
              src={imageMap[story.image]}
              alt="About DesignHaven"
              className="rounded-3xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
