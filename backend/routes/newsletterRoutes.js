const express = require("express");
const router = express.Router();
const {
  subscribe,
  unsubscribe,
  getAllSubscribers,
} = require("../controllers/newsletterController");

// POST /api/newsletter - Subscribe
router.post("/", subscribe);

// DELETE /api/newsletter/unsubscribe - Unsubscribe by email
router.delete("/unsubscribe", unsubscribe);

// GET /api/newsletter - Get all subscribers (admin)
router.get("/", getAllSubscribers);

module.exports = router;
