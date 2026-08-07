const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);

// Connect to MongoDB
connectDB().then((connected) => {
  if (!connected) {
    console.warn("MongoDB connection failed. Continuing without a database for now.");
  }
});

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/content", require("./routes/contentRoutes"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "DesignHaven API is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
