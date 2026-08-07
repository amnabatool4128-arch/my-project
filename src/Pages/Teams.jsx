import React, { useEffect, useState } from "react";
import PageHero from "../Components/PageHero";
import TeamCard from "../Components/TeamCard";
import { FaUsers } from "react-icons/fa";
import { getTeamMembers } from "../services/api";

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getTeamMembers();
        setTeamData(response?.data || []);
      } catch (err) {
        setError(err.message || "Unable to load team members right now.");
        setTeamData([]);
      } finally {
        setLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Teams"}
        description={
          "A talented team of architects, interior designers, and model makers dedicated to creating exceptional spaces."
        }
      />
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="text-center text-gray-600">Loading team members...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : teamData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {teamData.map((team, idx) => (
                <TeamCard team={team} key={team._id || idx} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No team members available right now.</div>
          )}
        </div>
      </div>
      <div className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="text-white text-left px-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Join Our Design Team
              </h2>
              <p className="text-md max-w-2xl mx-auto mb-6 ">
                We're always looking for talented designers, architects, and
                creative minds to join our studio.
              </p>
              <button className="bg-white rounded-full text-accent px-6 py-3 cursor-pointer hover:bg-white/80 transition duration-300">
                View Open Position
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent-light rounded-full flex items-center justify-center ">
                <FaUsers className="text-7xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
