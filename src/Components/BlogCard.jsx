import React from "react";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import { imageMap } from "../utils/imageMap";

const BlogCard = ({ post }) => {
  const formatDate = (value) => {
    if (!value) return "Recently published";

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
      return value;
      
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  

  return (
    <div className="bg-secondary rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in">
      <div>
        <img
          className="w-full h-64 object-cover"
          src={imageMap[post.image]}
          alt={post.title}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-6">
          <span className="flex items-center gap-2">
            <FaCalendar />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-2">
            <FaClock />
            {post.readTime || "5 min read"}
          </span>
        </div>
        <h2 className="text-gray-800 font-bold font-heading mb-6">
          {post.title}
        </h2>

        <p className="text-gray-400 mb-6 text-sm">{post.description}</p>

        <button className="text-accent flex items-center gap-2 cursor-pointer">
          Read Article
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
