const express = require("express");
const path = require("path");
const app = express();

// Serve static files from /public (where index.html is)
app.use(express.static(path.join(__dirname, "public")));

// Optional: fallback to index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
