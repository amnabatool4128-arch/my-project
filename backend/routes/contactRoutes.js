const express = require("express");
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

// POST /api/contact - Submit a contact form (public)
router.post("/", submitContact);

// GET /api/contact - Get all submissions (admin)
router.get("/", getAllContacts);

// PUT /api/contact/:id - Update status (admin)
router.put("/:id", updateContactStatus);

// DELETE /api/contact/:id - Delete a submission (admin)
router.delete("/:id", deleteContact);

module.exports = router;
