import { FaHandshake, FaLeaf, FaLightbulb } from "react-icons/fa";
import { assets } from "./assets";

export const story = {
  badge: "Our Story",
  title: "Journey",
  paragraphs: [
    "Founded in 2005 by Alexandra Chen, DesignHaven began as a small studio with a big vision: to redefine home design by blending artistic expression with functional living.",
    "What started as a passion project has grown into an award-winning design studio, recognized internationally for innovative home modeling and interior design solutions.",
    "Our philosophy centers on creating spaces that don't just look beautiful, but feel like home - reflecting the unique personality and lifestyle of each client."
  ],
  image:
    assets.aboutImg,
};

export const values = [
  {
    title: "Innovation",
    description:
      "We embrace new technologies and creative approaches to deliver unique design solutions.",
    icon: FaLightbulb,
    delay: "0s",
  },
  {
    title: "Integrity",
    description:
      "Honest communication and transparent processes build lasting client relationships.",
    icon: FaHandshake,
    delay: "0.2s",
  },
  {
    title: "Sustainability",
    description:
      "Responsible design that respects the environment and future generations.",
    icon: FaLeaf,
    delay: "0.4s",
  },
];

export const timeline = [
  {
    year: "2005",
    title: "Studio Founded",
    description: "DesignHaven opens its doors in a small studio in Los Angeles with a vision to transform home design.",
  },
  {
    year: "2010",
    title: "First Major Award",
    description: "Receives 'Best Residential Design' award at the International Design Awards.",
  },
  {
    year: "2015",
    title: "Sustainable Design Focus",
    description: "Launches dedicated sustainable design division focusing on eco-friendly home solutions.",
  },
  {
    year: "2023",
    title: "Virtual Design Studio",
    description: "Introduces immersive 3D modeling and virtual reality design experiences for clients.",
  },
];
