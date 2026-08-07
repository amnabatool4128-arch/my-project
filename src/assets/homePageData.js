import { FaLightbulb, FaMedal, FaUsers } from "react-icons/fa";
import { assets } from "./assets";

export const homePageData = {
  hero: {
    badge: "Award-Winning Design Studio",
    title: {
      normal: "Where",
      highlight: "Dream Homes",
      end: "Become Reality",
    },
    description:
      "We transform your vision into breathtaking living spaces with premium home modeling and interior design services that reflect your unique personality and lifestyle.",
   
    stats: [
      { value: "300+", label: "Projects Completed" },
      { value: "18+", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    image: {
      src: assets.heroImg,
      alt: "Luxury Home Design",
    },
  },

  features: {
    title: "Premium Design Solutions",
    subtitle:
      "We combine creativity with functionality to deliver exceptional home modeling experiences.",
    items: [
      {
        icon: FaLightbulb,
        title: "Innovative Design",
        description:
          "Cutting-edge design concepts tailored to your specific needs and preferences.",
      },
      {
        icon: FaUsers,
        title: "Client-Centric Approach",
        description:
          "Your vision is our priority at every stage of the design process.",
      },
      {
        icon: FaMedal,
        title: "Award-Winning Quality",
        description:
          "Recognition for excellence in design and craftsmanship.",
      },
    ],
  },

  testimonials: {
    title: "What Our Clients Say",
    subtitle:
      "Hear from homeowners who transformed their living spaces with our designs.",
    items: [
      {
        name: "Sarah Johnson",
        role: "Homeowner, Malibu",
        image:
          assets.user1Img,
        rating: 5,
        quote:
          "DesignHaven transformed our vision into a stunning reality.",
      },
      {
        name: "Michael Chen",
        role: "Real Estate Developer",
        image:
          assets.user2Img,
        rating: 5,
        quote:
          "Their 3D models helped us secure investors and exceeded expectations.",
      },
      {
        name: "Priya Sharma",
        role: "Interior Design Client",
        image:
         assets.user3Img,
        rating: 4.5,
        quote:
          "Beautiful, sustainable design that reduced our energy bills.",
      },
    ],
  },
};
