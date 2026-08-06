const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/mailer");

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Name, email, and message are required." });
    }

    const contact = await Contact.create({ name, email, phone, service, message });

    // Attempt to send notification email (non-blocking)
    sendContactEmail({ name, email, phone, service, message }).catch((err) =>
      console.error("Email send failed:", err.message)
    );

    res.status(201).json({
      success: true,
      message: "Your message has been received. We'll be in touch soon!",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/contact
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/contact/:id
const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found." });
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/contact/:id
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found." });
    }
    res.json({ success: true, message: "Contact deleted." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { submitContact, getAllContacts, updateContactStatus, deleteContact };
