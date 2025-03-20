import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";


const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

connectDb();

app.get("/", (_req, res) => {
  res.send("Server works fine");
});

app.post("/categories", async (req, res) => {
  try {
    const { categoryName } = req.body;
    const category = new Category({
      name: categoryName,
    });
    await category.save();
    res.status(201).json({ message: `category ${categoryName} has been created` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" })
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const categoryId = await Category.findOne({ name: category });
    console.log(categoryId._id);
    const product = new Product({
      name,
      price,
      category: categoryId,
    });
    await product.save();
    res.status(201).json({ message: `Product ${name} has been added` })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/products", async (_req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}...`)
});
