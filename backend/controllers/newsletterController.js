const Newsletter = require("../models/Newsletter");

// POST /api/newsletter
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.isActive) {
        return res
          .status(409)
          .json({ success: false, message: "This email is already subscribed." });
      }
      // Re-activate if previously unsubscribed
      existing.isActive = true;
      await existing.save();
      return res.json({ success: true, message: "Welcome back! You're subscribed again." });
    }

    await Newsletter.create({ email });
    res.status(201).json({ success: true, message: "Successfully subscribed to newsletter!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/newsletter/unsubscribe
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }

    const subscriber = await Newsletter.findOne({ email });
    if (!subscriber) {
      return res.status(404).json({ success: false, message: "Email not found." });
    }

    subscriber.isActive = false;
    await subscriber.save();

    res.json({ success: true, message: "You have been unsubscribed." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/newsletter
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { subscribe, unsubscribe, getAllSubscribers };
