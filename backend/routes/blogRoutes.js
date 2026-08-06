const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/blogController");

// GET /api/blog - Get all published posts
router.get("/", getAllPosts);

// GET /api/blog/:id - Get single post
router.get("/:id", getPostById);

// POST /api/blog - Create post (admin)
router.post("/", createPost);

// PUT /api/blog/:id - Update post (admin)
router.put("/:id", updatePost);

// DELETE /api/blog/:id - Delete post (admin)
router.delete("/:id", deletePost);

module.exports = router;
