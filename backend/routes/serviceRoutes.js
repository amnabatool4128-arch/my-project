const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

// GET /api/services
router.get("/", getAllServices);

// GET /api/services/:id
router.get("/:id", getServiceById);

// POST /api/services (admin)
router.post("/", createService);

// PUT /api/services/:id (admin)
router.put("/:id", updateService);

// DELETE /api/services/:id (admin)
router.delete("/:id", deleteService);

module.exports = router;
