import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";
import User from "../models/user.js";
import mustChangePassword from "../middlewares/mustChangePassword.js";
import authRole from "../middlewares/authRole.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password, mustChangePassword, role } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields should be filled" });
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res
        .status(422)
        .json({ message: `User with email: ${email} already exists` });
    }
    const hashedPassword = await bcrypt.hash(password, 9);
    await User.create({
      name,
      email,
      password: hashedPassword,
      mustChangePassword,
      role,
    });
    res.status(201).json({
      message: `User ${name} with email: ${email} has been created successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post(
  "/login",
  async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
    }
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "Invalid credentials" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(404).json({ message: "Invalid credentials" });
      }

      if (!user.mustChangePassword) {
        return res.status(200).json({ message: `Welcome ${user.name}` });
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  mustChangePassword
);

app.get("/change-password/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Please change password`,
  });
});

app.post("/change-password/:id", async (req, res) => {
  const id = req.params.id;
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    res.status(400).json({ message: "Please enter new password" });
  }
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(404).json({ error: "Invalid credentials" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 9);
    User.update(
      { password: hashedPassword, mustChangePassword: false },
      { where: { id } }
    );
    res.status(201).json({ message: "Password has been updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/delete-account/:id", async (req, res) => {
  const id = req.params.id;
  const { password } = req.body;

  if (!password) {
    res.status(404).json({ error: "Invalid password" });
  }
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).send("Invalid credentials");
    }
    User.destroy({ where: { id } });
    res.status(201).json({ message: `User with id: ${id} has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get(
  "/users/:id/admin",
  async (req, res, next) => {
    const id = req.params.id;

    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        return res.status(404).json({ error: "Invalid Credentials" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  authRole("admin"),
  (_req, res) => {
    res.status(200).json({ message: "Welcome, Admin!" });
  }
);

app.post("/change-email/:id", async (req, res) => {
  const id = req.params.id;
  const { password, newEmail } = req.body;
  if (!password || !newEmail) {
    res.status(400).json({ message: "Please fill all inputs" });
  }
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({ error: "Invalid credentials" });
    }
    const hasEmail = await User.findOne({ where: { email: newEmail } });
    if (hasEmail) {
      return res.status(422).json({ error: "Email already in use!" });
    }
    User.update({ email: newEmail }, { where: { id } });
    res.status(201).json({ message: "Email has been updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
