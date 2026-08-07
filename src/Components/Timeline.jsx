import React, { useEffect, useState } from "react";
import SeactionHeader from "./SectionHeader";
import { getSiteContent } from "../services/api";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("about");
        setTimeline(response.data?.timeline || []);
      } catch (err) {
        setError(err.message || "Unable to load timeline content.");
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
    <div className="py-24 bg-white">
      <div className=",ax-w-6xl mx-auto px-6">
        {/* Section Header */}
        <SeactionHeader
          badge={"Our Journey"}
          title={"Milestones"}
          highlight={"Timeline"}
          description={"Key moments in our journey of design excellence."}
        />
        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto fade-in">
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center">
                  {item.year}
                </div>
                <div className="bg-secondary p-6 rounded-2xl grow">
                  <h3 className="font-heading font-bold text-xl text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
