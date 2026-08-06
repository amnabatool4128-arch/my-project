/**
 * Seed script — populates the database with initial data from the frontend data files.
 * Run once with: node seed.js
 */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Project = require("./models/Project");
const BlogPost = require("./models/BlogPost");
const Service = require("./models/Service");
const TeamMember = require("./models/TeamMember");

const projects = [
  {
    title: "Cliffside Villa",
    description: "A contemporary villa with panoramic ocean views and sustainable features.",
    location: "Malibu, California",
    image: "/images/portfolio1.avif",
    categories: ["Residential", "Interior Design"],
    order: 0,
  },
  {
    title: "Skyline Apartments",
    description: "Luxury residential complex with smart home integration and premium amenities.",
    location: "New York, NY",
    image: "/images/portfolio2.avif",
    categories: ["Commercial"],
    order: 1,
  },
  {
    title: "Eco-Family Residence",
    description: "Net-zero energy home with green roofing and rainwater harvesting system.",
    location: "Austin, Texas",
    image: "/images/portfolio3.avif",
    categories: ["Sustainable", "Residential"],
    order: 2,
  },
  {
    title: "Urban Loft Transformation",
    description: "Complete interior redesign of a downtown loft space with industrial elements.",
    location: "Chicago, Illinois",
    image: "/images/portfolio4.avif",
    categories: ["Interior Design"],
    order: 3,
  },
  {
    title: "Mountain Retreat",
    description: "Rustic modern home designed for year-round living in a mountain setting.",
    location: "Aspen, Colorado",
    image: "/images/portfolio5.avif",
    categories: ["Residential"],
    order: 4,
  },
  {
    title: "Green Office Complex",
    description: "LEED-certified office building with biophilic design and energy-efficient systems.",
    location: "Seattle, Washington",
    image: "/images/portfolio6.avif",
    categories: ["Sustainable", "Commercial"],
    order: 5,
  },
];

const blogPosts = [
  {
    title: "The Future of Sustainable Home Design",
    description: "Exploring innovative materials and technologies for eco-friendly living spaces.",
    image: "/images/portfolio1.avif",
    date: new Date("2023-05-15"),
    readTime: "5 min read",
  },
  {
    title: "Maximizing Small Spaces: Design Strategies",
    description: "Creative solutions for optimizing functionality in compact living areas.",
    image: "/images/portfolio2.avif",
    date: new Date("2023-04-28"),
    readTime: "7 min read",
  },
  {
    title: "Color Psychology in Interior Design",
    description: "How color choices impact mood and perception in living spaces.",
    image: "/images/portfolio3.avif",
    date: new Date("2023-04-10"),
    readTime: "6 min read",
  },
  {
    title: "Smart Home Integration: The Future is Now",
    description: "How technology is transforming modern home design and functionality.",
    image: "/images/portfolio4.avif",
    date: new Date("2023-03-22"),
    readTime: "8 min read",
  },
  {
    title: "Biophilic Design: Bringing Nature Indoors",
    description: "The benefits of incorporating natural elements into interior spaces.",
    image: "/images/portfolio5.avif",
    date: new Date("2023-03-05"),
    readTime: "6 min read",
  },
  {
    title: "The Art of Lighting in Home Design",
    description: "How proper lighting can transform the ambiance of any space.",
    image: "/images/portfolio6.avif",
    date: new Date("2023-02-18"),
    readTime: "7 min read",
  },
];

const services = [
  {
    title: "3D Home Modeling",
    description: "Immersive 3D visualizations that bring your dream home to life before construction begins.",
    features: ["Virtual walkthroughs", "Material simulations", "Lighting studies"],
    icon: "FaCube",
    order: 0,
  },
  {
    title: "Interior Design",
    description: "Complete interior solutions that balance aesthetics, functionality, and personal style.",
    features: ["Space planning", "Custom furniture", "Color selection"],
    icon: "FaPaintRoller",
    order: 1,
  },
  {
    title: "Architectural Design",
    description: "Innovative architectural solutions that optimize space, light, and functionality.",
    features: ["Conceptual design", "Construction docs", "Permits & approvals"],
    icon: "FaDraftingCompass",
    order: 2,
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly designs that reduce environmental impact and operational costs.",
    features: ["Energy efficiency", "Sustainable materials", "Water conservation"],
    icon: "FaLeaf",
    order: 3,
  },
  {
    title: "Space Planning",
    description: "Strategic space utilization to maximize functionality and flow in any layout.",
    features: ["Functional zoning", "Traffic flow optimization", "Multipurpose solutions"],
    icon: "FaExpandArrowsAlt",
    order: 4,
  },
  {
    title: "Project Management",
    description: "End-to-end project supervision ensuring quality, timeline, and budget adherence.",
    features: ["Vendor coordination", "Quality control", "Timeline management"],
    icon: "FaHardHat",
    order: 5,
  },
];

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    bio: "20+ years in architectural design and project management.",
    image: "/images/team1.avif",
    order: 0,
  },
  {
    name: "Marcus Johnson",
    role: "Lead Architect",
    bio: "Specializes in sustainable design and innovative space planning.",
    image: "/images/team2.avif",
    order: 1,
  },
  {
    name: "Sophia Williams",
    role: "Interior Design Director",
    bio: "Expert in luxury interiors and bespoke furniture design.",
    image: "/images/team3.avif",
    order: 2,
  },
  {
    name: "Divine Park",
    role: "3D Modeling Specialist",
    bio: "Creates immersive virtual experiences and detailed renderings.",
    image: "/images/user1.avif",
    order: 3,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Promise.all([
      Project.deleteMany(),
      BlogPost.deleteMany(),
      Service.deleteMany(),
      TeamMember.deleteMany(),
    ]);
    console.log("Cleared existing data");

    // Insert seed data
    await Promise.all([
      Project.insertMany(projects),
      BlogPost.insertMany(blogPosts),
      Service.insertMany(services),
      TeamMember.insertMany(teamMembers),
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seed();
