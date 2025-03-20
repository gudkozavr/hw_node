import express from "express";
import "dotenv/config"
import { connectDb } from "./config/db.js";
import Product from "./models/Product.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());

connectDb();

app.post("/products", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = new Product({
      name,
      price,
      description,
    });

    await product.save();
    res.status(201).json({ message: `Product ${name} has been added` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/products", async (_req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalide Product ID format" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateParams = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalide Product ID format" });
    }
    const product = await Product.findByIdAndUpdate(
      id,
      updateParams,
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ message: "Invalid product ID format" });
  }

  const deleteProduct = await Product.findByIdAndDelete(id);
  if (!deleteProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
