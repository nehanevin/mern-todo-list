require("dotenv").config(); // loads variables from .env
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");

const app = express();

// CORS only for the frontend's address (not every origin)
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // read JSON request bodies

app.use("/api/tasks", taskRoutes);

// Connect to MongoDB using the connection string from .env, then start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err.message));
