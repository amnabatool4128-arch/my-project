const express = require("express");

const router = express.Router();

const {
  getAllSiteContent,
  getSiteContent,
} = require("../controllers/contentController");

router.get("/", getAllSiteContent);

router.get("/:page", getSiteContent);

module.exports = router;
