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
const SiteContent = require("./models/SiteContent");

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

const siteContentEntries = [
  {
    page: "home",
    content: {
      hero: {
        badge: "Award-Winning Design Studio",
        title: { normal: "Where", highlight: "Dream Homes", end: "Become Reality" },
        description: "We transform your vision into breathtaking living spaces with premium home modeling and interior design services that reflect your unique personality and lifestyle.",
        stats: [
          { value: "300+", label: "Projects Completed" },
          { value: "18+", label: "Years Experience" },
          { value: "98%", label: "Client Satisfaction" },
        ],
        image: { src: "/images/heroImg.jpg", alt: "Luxury Home Design" },
      },
      features: {
        title: "Premium Design Solutions",
        subtitle: "We combine creativity with functionality to deliver exceptional home modeling experiences.",
        items: [
          { title: "Innovative Design", description: "Cutting-edge design concepts tailored to your specific needs and preferences.", icon: "FaLightbulb" },
          { title: "Client-Centric Approach", description: "Your vision is our priority at every stage of the design process.", icon: "FaUsers" },
          { title: "Award-Winning Quality", description: "Recognition for excellence in design and craftsmanship.", icon: "FaMedal" },
        ],
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Hear from homeowners who transformed their living spaces with our designs.",
        items: [
          { name: "Sarah Johnson", role: "Homeowner, Malibu", image: "/images/user1.avif", rating: 5, quote: "DesignHaven transformed our vision into a stunning reality." },
          { name: "Michael Chen", role: "Real Estate Developer", image: "/images/user2.jpg", rating: 5, quote: "Their 3D models helped us secure investors and exceeded expectations." },
          { name: "Priya Sharma", role: "Interior Design Client", image: "/images/user3.jpg", rating: 4.5, quote: "Beautiful, sustainable design that reduced our energy bills." },
        ],
      },
    },
  },
  {
    page: "about",
    content: {
      story: {
        badge: "Our Story",
        title: "Journey",
        paragraphs: [
          "Founded in 2005 by Alexandra Chen, DesignHaven began as a small studio with a big vision: to redefine home design by blending artistic expression with functional living.",
          "What started as a passion project has grown into an award-winning design studio, recognized internationally for innovative home modeling and interior design solutions.",
          "Our philosophy centers on creating spaces that don't just look beautiful, but feel like home - reflecting the unique personality and lifestyle of each client.",
        ],
        image: "/images/about.avif",
      },
      values: [
        { title: "Innovation", description: "We embrace new technologies and creative approaches to deliver unique design solutions.", icon: "FaLightbulb", delay: "0s" },
        { title: "Integrity", description: "Honest communication and transparent processes build lasting client relationships.", icon: "FaHandshake", delay: "0.2s" },
        { title: "Sustainability", description: "Responsible design that respects the environment and future generations.", icon: "FaLeaf", delay: "0.4s" },
      ],
      timeline: [
        { year: "2005", title: "Studio Founded", description: "DesignHaven opens its doors in a small studio in Los Angeles with a vision to transform home design." },
        { year: "2010", title: "First Major Award", description: "Receives 'Best Residential Design' award at the International Design Awards." },
        { year: "2015", title: "Sustainable Design Focus", description: "Launches dedicated sustainable design division focusing on eco-friendly home solutions." },
        { year: "2023", title: "Virtual Design Studio", description: "Introduces immersive 3D modeling and virtual reality design experiences for clients." },
      ],
    },
  },
  {
    page: "contact",
    content: {
      contactInfo: [
        { id: 1, icon: "FaMapMarkerAlt", title: "Our Office", value: "123 Design Street, Creative District  Los Angeles, CA 90001" },
        { id: 2, icon: "FaPhoneAlt", title: "Phone Number", value: "+91 987654321" },
        { id: 3, icon: "FaEnvelope", title: "Email Address", value: "info@designhaven.com" },
        { id: 4, icon: "FaClock", title: "Working Hours", value: "Monday - Friday: 9:00 AM - 6:00 PM", value1: "Saturday: 10:00 AM - 4:00 PM" },
      ],
      socialLinks: [
        { id: 1, icon: "FaFacebookF", link: "#" },
        { id: 2, icon: "FaInstagram", link: "#" },
        { id: 3, icon: "FaPinterestP", link: "#" },
        { id: 4, icon: "FaLinkedinIn", link: "#" },
      ],
      services: ["3D Home Modeling", "Interior Design", "Architectural Planning", "Sustainable Design", "Space Optimization", "Project Management"],
    },
  },
  {
    page: "footer",
    content: {
      company: {
        name: "DesignHaven",
        description: "Premium home modeling and interior design studio creating exceptional living spaces since 2005.",
        logoIcon: "FaHome",
        socialLinks: [
          { icon: "FaFacebook", url: "#" },
          { icon: "FaInstagram", url: "#" },
          { icon: "FaPinterestP", url: "#" },
          { icon: "FaLinkedinIn", url: "#" },
        ],
      },
      quickLinks: [
        { label: "Home", page: "home" },
        { label: "About Us", page: "about" },
        { label: "Services", page: "services" },
        { label: "Portfolio", page: "portfolio" },
        { label: "Our Team", page: "team" },
        { label: "Blog", page: "blog" },
      ],
      services: ["3D Home Modeling", "Interior Design", "Architectural Design", "Space Planning", "Sustainable Design", "Project Management"],
      contactInfo: { address: "New Ashok Nagar, New Delhi", phone: "+1 (555) 123-4567", email: "info@designhaven.com" },
      newsletter: { title: "Subscribe to Our Newsletter", description: "Get design tips, project inspiration, and exclusive offers directly to your inbox." },
      copyright: { text: "© 2026 DesignHaven. All rights reserved.", policies: [{ label: "Privacy Policy", url: "#" }, { label: "Terms of Service", url: "#" }, { label: "Cookie Policy", url: "#" }] },
    },
  },
  {
    page: "services",
    content: [
      {
        step: "1",
        title: "Consultation",
        description: "Initial meeting to understand your vision, requirements, and budget.",
        delay: "0s",
      },
      {
        step: "2",
        title: "Concept Design",
        description: "Developing initial design concepts and 3D visualizations.",
        delay: "0.1s",
      },
      {
        step: "3",
        title: "Design Development",
        description: "Refining designs, selecting materials, and finalizing details.",
        delay: "0.2s",
      },
      {
        step: "4",
        title: "Implementation",
        description: "Project execution with regular updates and quality checks.",
        delay: "0.3s",
      },
    ],
  },
];

const seed = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const projectResults = await Promise.all(
      projects.map((project) =>
        Project.findOneAndUpdate(
          { title: project.title },
          { $set: project },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    const blogResults = await Promise.all(
      blogPosts.map((post) =>
        BlogPost.findOneAndUpdate(
          { title: post.title },
          { $set: post },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    const serviceResults = await Promise.all(
      services.map((service) =>
        Service.findOneAndUpdate(
          { title: service.title },
          { $set: service },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    const teamResults = await Promise.all(
      teamMembers.map((member) =>
        TeamMember.findOneAndUpdate(
          { name: member.name },
          { $set: member },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    const contentResults = await Promise.all(
      siteContentEntries.map((entry) =>
        SiteContent.findOneAndUpdate(
          { page: entry.page },
          { $set: entry },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    console.log(`✅ Database seeded successfully: ${projectResults.length} projects, ${blogResults.length} posts, ${serviceResults.length} services, ${teamResults.length} team members, ${contentResults.length} content entries.`);
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seed();
