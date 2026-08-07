import { assets } from "./assets";

export const filters = [
  "All Projects",
  "Residential",
  "Commercial",
  "Interior Design",
  "Sustainable",
];

export const projects = [
  {
    title: "Cliffside Villa",
    description:
      "A contemporary villa with panoramic ocean views and sustainable features.",
    location: "Malibu, California",
    image: assets.portfolio1Img,
    categories: ["Residential", "Interior Design"],
    delay: "0s",
  },
  {
    title: "Skyline Apartments",
    description:
      "Luxury residential complex with smart home integration and premium amenities.",
    location: "New York, NY",
    image:assets.portfolio2Img,
    categories: ["Commercial"],
    delay: "0.1s",
  },
  {
    title: "Eco-Family Residence",
    description:
      "Net-zero energy home with green roofing and rainwater harvesting system.",
    location: "Austin, Texas",
    image:assets.portfolio3Img,
    categories: ["Sustainable", "Residential"],
    delay: "0.2s",
  },
  {
    title: "Urban Loft Transformation",
    description:
      "Complete interior redesign of a downtown loft space with industrial elements.",
    location: "Chicago, Illinois",
    image:assets.portfolio4Img,
    categories: ["Interior Design"],
    delay: "0.3s",
  },
  {
    title: "Mountain Retreat",
    description:
      "Rustic modern home designed for year-round living in a mountain setting.",
    location: "Aspen, Colorado",
    image:assets.portfolio5Img,
    categories: ["Residential"],
    delay: "0.4s",
  },
  {
    title: "Green Office Complex",
    description:
      "LEED-certified office building with biophilic design and energy-efficient systems.",
    location: "Seattle, Washington",
    image:assets.portfolio6Img,
    categories: ["Sustainable", "Commercial"],
    delay: "0.5s",
  },
];




