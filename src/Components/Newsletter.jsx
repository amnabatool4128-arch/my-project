import React, { useState } from "react";
import { subscribeNewsletter } from "../services/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      await subscribeNewsletter(email);
      setStatus({ loading: false, success: true, error: "" });
      setEmail("");
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="py-20 bg-accent-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get design tips, project inspiration, and exclusive offers directly
            to your inbox.
          </p>

          {status.success && (
            <p className="mb-4 text-green-600 font-medium">
              ✓ You're subscribed! Welcome to the DesignHaven community.
            </p>
          )}
          {status.error && (
            <p className="mb-4 text-red-500 font-medium">{status.error}</p>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="grow px-6 py-4 rounded-full bg-gray-900 border-gray-600 text-white focus:outline-none placeholder:text-sm placeholder:text-white"
              placeholder="Your Email Address"
            />
            <button
              type="submit"
              disabled={status.loading}
              className="px-6 py-4 border bg-accent rounded-full text-white font-bold cursor-pointer disabled:opacity-60"
            >
              {status.loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
