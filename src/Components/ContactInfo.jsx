import React, { useEffect, useState } from "react";
import { getSiteContent } from "../services/api";
import { iconMap } from "../utils/iconMap";

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("contact");

        

        setContactInfo(response.data?.content?.contactInfo || []);
        setSocialLinks(response.data?.content?.socialLinks || []);
      } catch (err) {
        setError(err.message || "Unable to load contact information.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <div className="py-10 text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="fade-in">
      <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-heading mb-6">
        Contact <span className="text-accent">Information</span>
      </h2>

      {/* Contact Info */}
      <div className="space-y-8 mb-12">
        {contactInfo.map((item) => {
          const IconComponent = iconMap[item.icon] || iconMap.FaMapMarkerAlt;
          return (
            <div key={item.id} className="flex items-start gap-4">
              {/* icon */}
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white text-lg">
                  <IconComponent />
                </span>
              </div>
              <div>
                <h4 className="text-gray-800 font-bold font-heading mb-1">
                  {item.title}
                </h4>

                <p className="text-gray-600 max-w-sm">{item.value}</p>
                {item.value1 && (
                  <p className="text-gray-600 max-w-sm">{item.value1}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Social Info */}
      <div>
        <h4 className="text-2xl text-gray-800 font-bold font-heading mb-4">
          Follow <span className="text-accent">Us</span>
        </h4>
        <div className="flex items-center space-x-4 flex-wrap">
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon] || iconMap.FaFacebookF;
            return (
            <a
              key={index}
              href="home"
              className="w-10 h-10 md:w-12 md:h-12 bg-accent-light hover:bg-accent transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <IconComponent />
            </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
