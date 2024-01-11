const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const Product = require("./models/Product");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://AdminKtt:Katta123@ktt.yt5wlrj.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected!");

    // Start the server after a successful database connection
    app.listen(
      port,
      /* "192.168.99.36" */ /* "192.168.1.22" */ "192.168.193.73",
      () => console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  Product.find().then((products) => res.json(products));
});

app.get("/products/:type", async (req, res) => {
  const products = await Product.find({ type: req.params.type });
  res.json(products || []);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, date, amount } = req.body;

  console.log("id", id, "name", name, "date", date, "amount", amount);

  let updatedProducts = [];
  // Update product with new name, date, and type
  for (let i = 0; i < amount; i++) {
    const updateProduct = await Product.findOneAndUpdate(
      { type: id, name: { $eq: "" } },
      { name, date },
      { new: true }
    );
    updatedProducts.push(updateProduct);
  }

  res.json(updatedProducts);
});

//It will need to spilt it up and update each product with the given productID to empty string.
app.put("/products/update/:name", async (req, res) => {
  console.log("body", req.body);

  let { productIDs } = req.body;
  const { name } = req.body;

  productIDs = productIDs.split(",");

  console.log("productID", productIDs, "name", name);

  let updatedProducts = [];
  // Update product with new name, date, and type
  for (let i = 0; i < productIDs.length; i++) {
    const productID = productIDs[i];
    const updateProduct = await Product.findOneAndUpdate(
      { productID: productID, name: name },
      { name: "", date: "" },
      { new: true }
    );
    updatedProducts.push(updateProduct);
    console.log("updateProduct", updateProduct);
    console.log("updatedProducts", updatedProducts.length);
  }

  console.log("updatedProducts utenfor", updatedProducts.length);
  if (updatedProducts.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(updatedProducts);
});

//app.get for getProductWithName
app.get("/products/name/:name", async (req, res) => {
  const products = await Product.find({ name: req.params.name });
  if (products.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(products);
});

app.post("/products", (req, res) => {
  const requiredFields = ["type", "productID", "date", "name"];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).send(`Missing required field: ${field}`);
    }
  }
  Product.create(req.body).then((product) => res.json(product));
});
