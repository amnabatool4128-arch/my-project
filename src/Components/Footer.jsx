import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getSiteContent } from "../services/api";
import { iconMap } from "../utils/iconMap";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
   const loadContent = async () => {
     try {
       const response = await getSiteContent("footer");

      //  console.log("Footer Response JSON:", JSON.stringify(response, null, 2));

       setFooterData(response.data.content || response.data || null);
     } catch (err) {
       setError(err.message || "Unable to load footer content.");
     } finally {
       setLoading(false);
     }
   };

   loadContent();
 }, []);

  if (loading) {
    return <footer className="bg-gray-900 pt-16 pb-8 text-white"><div className="max-w-6xl mx-auto px-6 text-center">Loading...</div></footer>;
  }

  if (error || !footerData) {
    return <footer className="bg-gray-900 pt-16 pb-8 text-white"><div className="max-w-6xl mx-auto px-6 text-center text-red-600">{error || "Unable to load footer content."}</div></footer>;
  }

  const {
    company = {},
    quickLinks = [],
    services = [],
    contactInfo = {},
    copyright = {},
  } = footerData;

  const LogoIcon = iconMap[company.logoIcon] || iconMap.FaHome;
 

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <LogoIcon className="text-2xl" />
              </div>
              <div className="font-heading text-2xl font-bold">
                Design <span className="text-accent">Haven</span>
              </div>
            </div>

            <p className="text-gray-400 mb-6 text-sm">{company.description}</p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {company.socialLinks?.map((social, idx) => {
                const Icon = iconMap[social.icon] || iconMap.FaHome;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 ease-in-out hover:-translate-y-0"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 ">
              {quickLinks?.map((link, idx) => (
                <li key={idx} className="text-sm">
                  <a href={`#${link.page}`} className="hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              {services?.map((service, idx) => (
                <li key={idx} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div>
            <h3 className=" text-xl font-bold font-heading mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-accent " />{" "}
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt className="text-accent" /> {contactInfo.phone}
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-accent" /> {contactInfo.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <span>{copyright.text}</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            {copyright.policies?.map((policy, idx) => (
              <a key={idx} href={policy.url} className="hover:text-accent">
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
