import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { imageMap } from "../utils/imageMap";

const TeamCard = ({ team }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in">
      {/* image */}
      <div>
        <img
          src={imageMap[team.image]}
          alt={team.name}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-6">
        {/* Content */}
        <h2 className="text-xl text-gray-800 font-bold font-heading mb-4">
          {team.name}
        </h2>
        <p className="text-accent font-medium mb-4">{team.role}</p>
        <p className="text-xs text-gray-500 mb-4">{team.bio}</p>
        {/* social Icons */}
        <div className="flex items-center space-x-4 text-gray-400">
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
