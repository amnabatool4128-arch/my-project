/**
 * Centralised API helper.
 * All backend calls go through here so the base URL is set in one place.
 */

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options = {}, fallbackValue = null) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await res.json()
      : { message: await res.text() };

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    if (fallbackValue !== null) {
      console.warn(`Falling back for ${endpoint}:`, error.message);
      return fallbackValue;
    }

    throw error;
  }
};

// ─── Contact ────────────────────────────────────────────────────────────────
export const submitContactForm = (formData) =>
  request("/contact", { method: "POST", body: JSON.stringify(formData) });

// ─── Newsletter ──────────────────────────────────────────────────────────────
export const subscribeNewsletter = (email) =>
  request("/newsletter", { method: "POST", body: JSON.stringify({ email }) });

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const getBlogPosts = () => request("/blog");

export const getBlogPostById = (id) => request(`/blog/${id}`);

export const createBlogPost = (postData) =>
  request("/blog", { method: "POST", body: JSON.stringify(postData) });

export const updateBlogPost = (id, postData) =>
  request(`/blog/${id}`, { method: "PUT", body: JSON.stringify(postData) });

export const deleteBlogPost = (id) =>
  request(`/blog/${id}`, { method: "DELETE" });

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = (category) => {
  const query = category && category !== "All Projects" ? `?category=${encodeURIComponent(category)}` : "";
  return request(`/projects${query}`);
};

export const getProjectById = (id) => request(`/projects/${id}`);

export const createProject = (projectData) =>
  request("/projects", { method: "POST", body: JSON.stringify(projectData) });

export const updateProject = (id, projectData) =>
  request(`/projects/${id}`, { method: "PUT", body: JSON.stringify(projectData) });

export const deleteProject = (id) =>
  request(`/projects/${id}`, { method: "DELETE" });

// ─── Services ─────────────────────────────────────────────────────────────────
export const getServices = () => request("/services");

export const getServiceById = (id) => request(`/services/${id}`);

export const createService = (serviceData) =>
  request("/services", { method: "POST", body: JSON.stringify(serviceData) });

export const updateService = (id, serviceData) =>
  request(`/services/${id}`, { method: "PUT", body: JSON.stringify(serviceData) });

export const deleteService = (id) =>
  request(`/services/${id}`, { method: "DELETE" });

// ─── Team ─────────────────────────────────────────────────────────────────────
export const getTeamMembers = () => request("/team");

export const getTeamMemberById = (id) => request(`/team/${id}`);

export const createTeamMember = (memberData) =>
  request("/team", { method: "POST", body: JSON.stringify(memberData) });

export const updateTeamMember = (id, memberData) =>
  request(`/team/${id}`, { method: "PUT", body: JSON.stringify(memberData) });

export const deleteTeamMember = (id) =>
  request(`/team/${id}`, { method: "DELETE" });

// ─── Site content ──────────────────────────────────────────────────────────
export const getSiteContent = (page) => request(`/content/${page}`);
export const getAllSiteContent = () => request("/content");
