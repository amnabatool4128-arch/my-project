import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export const footerData = {
  company: {
    name: "DesignHaven",
    description:
      "Premium home modeling and interior design studio creating exceptional living spaces since 2005.",
    logoIcon: FaHome,
    socialLinks: [
      { icon: FaFacebook, url: "#" },
      { icon: FaInstagram, url: "#" },
      { icon: FaPinterestP, url: "#" },
      { icon: FaLinkedinIn, url: "#" },
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

  services: [
    "3D Home Modeling",
    "Interior Design",
    "Architectural Design",
    "Space Planning",
    "Sustainable Design",
    "Project Management",
  ],

  contactInfo: {
    address: "New Ashok Nagar, New Delhi",
    phone: "+1 (555) 123-4567",
    email: "info@designhaven.com",
  },

  newsletter: {
    title: "Subscribe to Our Newsletter",
    description:
      "Get design tips, project inspiration, and exclusive offers directly to your inbox.",
  },

  copyright: {
    text: "© 2026 DesignHaven. All rights reserved.",
    policies: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Cookie Policy", url: "#" },
    ],
  },
};
