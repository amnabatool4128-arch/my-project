import React, { useEffect, useState } from "react";
import PageHero from "../Components/PageHero";
import BlogCard from "../Components/BlogCard";
import { FaArrowRight } from "react-icons/fa";
import { getBlogPosts } from "../services/api";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        setError("");
       const response = await getBlogPosts();

       

       setBlogPosts(response?.data || []);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  return (
    <div>
      <PageHero
        title={"Design"}
        highlight={"Insight"}
        description={
          "Explore design trends, tips, and insights from our team of experts."
        }
      />
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="text-center text-gray-600">Loading blog posts...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard post={post} key={post._id || index} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No blog posts available right now.</div>
          )}

          <div className="flex justify-center items-center mt-8">
            <button className="px-6 py-3 bg-accent text-white rounded-full text-center cursor-pointer flex items-center gap-2">
              View All Article
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
