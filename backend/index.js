const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "Som Pandey", email: "som@gmail.com", role: "Admin" },
  { id: 2, name: "Anu Kumari", email: "anu@gmail.com", role: "User" },
  { id: 3, name: "Shivani Singh", email: "shivani@gmail.com", role: "User" },
];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// ADD user
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.map((u) => (u.id === id ? { ...u, ...req.body } : u));
  res.json({ success: true });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ success: true });
});

app.listen(5001, () => {
  console.log("Backend running on http://localhost:5001");
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});
