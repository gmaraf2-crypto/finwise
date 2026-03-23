const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// CORS - allow all in development
app.use(
  cors({
    origin: true, // Allow all origins in CodeSandbox
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Basic test route
app.get("/api", (req, res) => {
  res.json({ message: "Finwise API is running", version: "1.0.0" });
});

// Auth routes
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // For demo purposes - you can hardcode a test user
  // In production, connect to Supabase
  if (email === "demo@finwise.com" && password === "demo123") {
    res.json({
      token: "demo-token",
      user: {
        id: "1",
        email: "demo@finwise.com",
        fullName: "Demo User",
        householdId: "household-1",
        role: "Admin",
      },
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Family routes (mock data for testing)
app.get("/api/family/members", (req, res) => {
  res.json([
    {
      id: "1",
      email: "john@family.com",
      fullName: "John Doe",
      status: "active",
      relationship: "Spouse",
      phone: "+1234567890",
      createdAt: "2024-01-15",
      role: { id: "role1", name: "Admin" },
    },
    {
      id: "2",
      email: "jane@family.com",
      fullName: "Jane Doe",
      status: "active",
      relationship: "Child",
      phone: "+1234567891",
      createdAt: "2024-02-20",
      role: { id: "role2", name: "Child" },
    },
  ]);
});

app.get("/api/roles", (req, res) => {
  res.json([
    { id: "role1", name: "Admin", description: "Full access" },
    { id: "role2", name: "Child", description: "Limited access" },
    { id: "role3", name: "Spouse", description: "Full access" },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
