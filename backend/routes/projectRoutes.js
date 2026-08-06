const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// GET /api/projects - Get all projects (supports ?category=Residential)
router.get("/", getAllProjects);

// GET /api/projects/:id - Get single project
router.get("/:id", getProjectById);

// POST /api/projects - Create project (admin)
router.post("/", createProject);

// PUT /api/projects/:id - Update project (admin)
router.put("/:id", updateProject);

// DELETE /api/projects/:id - Delete project (admin)
router.delete("/:id", deleteProject);

module.exports = router;
