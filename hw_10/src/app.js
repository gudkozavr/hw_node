import express from "express";
import jwt from "jsonwebtoken";
import { users } from "./users.js";
import bcrypt from "bcrypt";
import authenticateJwt from "./middlewares/authenticate.js";
import authorizeRole from "./middlewares/authorize.js";

const app = express();
const PORT = process.env.PORT || 3333;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (_req, res) => {
  res.status(200).json({ users })
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" })
  }

  try {
    const user = users.find((user) => user.email === email);
    if (!user) {
      res.status(401).json({ message: "User not found!" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: "Invalide credentials" });
    }
    delete user.password;
    const token = jwt.sign(user, jwtSecret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
});

app.put("/update-email", authenticateJwt, (req, res) => {
  const { email, newEmail } = req.body;

  if (!newEmail) {
    res.status(400).json({ message: "New Email is required" })
  }

  const user = users.find(user => user.email === email);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  user.email = newEmail;

  res.status(200).json({ message: "User email has been updated" })
  console.log(user);
});

app.delete("/delete-account/:id", authenticateJwt, (req, res) => {
  const id = req.params.id;
  const idx = users.findIndex(user => user.id === +id);

  try {
    if (idx === -1) {
      res.status(404).json({ message: "User Not Found!" })
    }
    users.splice(idx, 1);
    console.log(`User has been deleted`);
    res
      .status(200)
      .json({ message: "user has been deleted successfully", users })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
});

app.put("/update-role", authenticateJwt, authorizeRole("admin"), (req, res) => {
  const { id, newRole } = req.body;

  if (!id || !newRole) {
    res.status(400).json({ message: "id and new role required" })
  }
  const user = users.find(user => user.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" })
  }
  res
    .status(200)
    .json({ message: `User role with id: ${id} has been updated` })
});

app.put("/refresh-token", authenticateJwt, (req, res) => {

  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwtSecret, (err, data) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden: Invalide token" });
      }
      const { exp, iat, ...user } = data;

      const newToken = jwt.sign(user, jwtSecret, { expiresIn: "1h" });
      res.json({ newToken });
    });
  }
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}...`)
})
