const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    content: {
      type: String, // full article body (HTML or markdown)
      trim: true,
    },
    image: {
      type: String,
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      trim: true,
      default: "DesignHaven Team",
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
