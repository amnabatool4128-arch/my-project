const SiteContent = require("../models/SiteContent");

// GET /api/content
const getAllSiteContent = async (req, res) => {
  try {
    const content = await SiteContent.find();

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET /api/content/:page
const getSiteContent = async (req, res) => {
  try {
    const pageContent = await SiteContent.findOne({
      page: req.params.page,
    });

    if (!pageContent) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.status(200).json({
      success: true,
      data: pageContent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllSiteContent,
  getSiteContent,
};
