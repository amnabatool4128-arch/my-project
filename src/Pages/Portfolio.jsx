import React, { useEffect, useState } from "react";
import PageHero from "../Components/PageHero";
import PortfolioFilter from "../Components/PortfolioFilter";
import PortfolioCard from "../Components/PortfolioCard";
import { FaArrowRight } from "react-icons/fa";
import { getProjects } from "../services/api";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getProjects();
        setProjects(response?.data || []);
      } catch (err) {
        setError(err.message || "Unable to load projects right now.");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filters = ["All Projects", ...new Set(projects.flatMap((project) => project.categories || []))];
  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => (project.categories || []).includes(activeFilter));

  return (
    <div className="">
      <PageHero
        title={"Our"}
        highlight={"Portfolios"}
        description={
          "Explore our award-winning home modeling projects that showcase our design excellence."
        }
      />
      <PortfolioFilter
        active={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={filters}
      />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center text-gray-600">Loading projects...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <PortfolioCard item={project} index={idx} key={project._id || idx} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No projects available right now.</div>
          )}

          <div className="flex justify-center mt-16">
            <button className="flex items-center justify-center gap-2 bg-accent px-6 py-2 rounded-full text-white cursor-pointer">
              View All Projects
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
