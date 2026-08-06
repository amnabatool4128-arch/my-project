const express = require("express");
const router = express.Router();
const {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
} = require("../controllers/teamController");

// GET /api/team
router.get("/", getAllMembers);

// GET /api/team/:id
router.get("/:id", getMemberById);

// POST /api/team (admin)
router.post("/", createMember);

// PUT /api/team/:id (admin)
router.put("/:id", updateMember);

// DELETE /api/team/:id (admin)
router.delete("/:id", deleteMember);

module.exports = router;
