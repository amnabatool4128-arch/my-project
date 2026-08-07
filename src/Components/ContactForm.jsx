import React, { useEffect, useState } from "react";
import { getSiteContent, submitContactForm } from "../services/api";

const initialState = { name: "", email: "", phone: "", service: "", message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await getSiteContent("contact");
        setServices(response.data?.content?.services || []);
      } catch (err) {
        setContentError(err.message || "Unable to load contact services.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      await submitContactForm(formData);
      setStatus({ loading: false, success: true, error: "" });
      setFormData(initialState);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="bg-secondary fade-in rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl text-gray-800 font-bold font-heading mb-6">
        Send Us a Message
      </h3>

      {status.success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          ✓ Your message has been sent! We'll be in touch soon.
        </div>
      )}
      {status.error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {status.error}
        </div>
      )}

      {contentError && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{contentError}</div>}

      <form onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent placeholder:text-xs"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent placeholder:text-xs"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-gray-600">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent placeholder:text-xs"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Services */}
        <div className="mb-4">
          <label htmlFor="service" className="block mb-2 text-gray-600">
            Services
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-6 py-2 border-2 border-accent focus:outline-none"
          >
            <option value="">Select a Service</option>
            {!loading && services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="text-gray-600 block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            className="w-full px-6 py-2 rounded focus:outline-none border-2 border-accent placeholder:text-xs"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="px-4 py-2 bg-accent rounded-full text-white cursor-pointer disabled:opacity-60"
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
