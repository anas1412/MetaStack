const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files (e.g., images, custom JS) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Check if MONGO_URI is provided
if (!process.env.MONGO_URI) {
  console.warn("MONGO_URI is not provided. Skipping database connection.");
  console.log(`
    To configure the database:
    1. Create a .env file in the root directory of your project.
    2. Add the following line to the .env file:
       MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
    3. Replace <username>, <password>, and <database> with your MongoDB credentials.
    4. Restart the server.
  `);
} else {
  // Log the MongoDB connection URI
  console.log("Connecting to MongoDB...");

  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
}

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Set port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
