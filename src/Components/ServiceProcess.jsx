import React, { useEffect, useState } from "react";
import SeactionHeader from "./SectionHeader";
import { getSiteContent } from "../services/api";

const ServiceProcess = () => {
  const [processSteps, setProcessSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("services");
        

        

        setProcessSteps(response.data?.content || []);
        console.log("Process Steps:", response.data?.content);
      } catch (err) {
        setError(err.message || "Unable to load process steps.");
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
  console.log("State:", processSteps);

  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Seection Header */}
        <SeactionHeader
          badge={"Our Process"}
          title={"How We"}
          highlight={"Work"}
          description={
            "A systematic approach to delivering exceptional design solutions."
          }
        />
        {/* Process Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps?.map((process, idx) => (
            <div key={idx} className="fade-in text-center">
              <div className="flex flex-col items-center justify-center">
                {/* Steps */}
                <div
                  className="w-16 h-16 bg-accent rounded-full flex items-center
                justify-center mb-6"
                >
                  <span className="text-white text-2xl cursor-pointer font-heading">
                    {process.step}
                  </span>
                </div>
                <h4 className="text-gray-800 font-bold font-heading mb-4 text-2xl">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
