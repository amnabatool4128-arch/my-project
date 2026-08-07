import React, { useEffect, useState } from "react";
import PageHero from "../Components/PageHero";
import Story from "../Components/Story";
import Values from "../Components/Values";
import Timeline from "../Components/Timeline";
import { getSiteContent } from "../services/api";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await getSiteContent("about");

        setAboutData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    loadAbout();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Story data={aboutData.story} />

      <Values data={aboutData.values} />

      <Timeline data={aboutData.timeline} />
    </div>
  );
};

export default About;
