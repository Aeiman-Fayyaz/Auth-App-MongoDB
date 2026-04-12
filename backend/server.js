const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // enable CORS, allowing frontend (different origin) to make request use as a blockers

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1/:27017/mernAuth") // HTML link , MongoDB localhost , Database name
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Data Fetching
const userSchema = new mongoose.Schema({
  // Structure for user documents
  email: String,
  name: String,
  password: String,
  contactNo: Number,
});

// Store data
const User = mongoose.model("users", userSchema);

// SignUp API

app.post("/signup", async (req, res) => {
  const { name, password, contactNo, email } = req.body;

  const users = new User({ name, password, contactNo, email }); // For new user
  await users.save();

  // Response message
  res.json({ message: "User Registered" });
});

// Login API
app.post("/login", async (req, res) => {
  const { email, name, password, contactNo } = req.body;

  const users = await User.findOne({
    email,
    password,
    name,
    contactNo,
  });
  if (users) {
    res.json({ message: "Login Successful" });
  } else {
    res.json({ message: "Invalid Credential" });
  }
});

// Server Port Connection
app.listen(5000, () => {
  console.log("Server Running on Port");
});
