/**
 * Centralised API helper.
 * All backend calls go through here so the base URL is set in one place.
 */

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

// ─── Contact ────────────────────────────────────────────────────────────────
export const submitContactForm = (formData) =>
  request("/contact", { method: "POST", body: JSON.stringify(formData) });

// ─── Newsletter ──────────────────────────────────────────────────────────────
export const subscribeNewsletter = (email) =>
  request("/newsletter", { method: "POST", body: JSON.stringify({ email }) });

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = (category) => {
  const query = category && category !== "All Projects" ? `?category=${encodeURIComponent(category)}` : "";
  return request(`/projects${query}`);
};

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const getBlogPosts = () => request("/blog");

// ─── Services ─────────────────────────────────────────────────────────────────
export const getServices = () => request("/services");

// ─── Team ─────────────────────────────────────────────────────────────────────
export const getTeamMembers = () => request("/team");
