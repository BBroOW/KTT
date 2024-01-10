const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const Product = require("./models/Product");

const app = express();
const port = 3000;



app.use(express.json());
app.use(cors());

// MongoDB connection

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products", (req, res) => {
    Product.find().then((products) => res.json(products));
});


app.get("/products/:type", async (req, res) => {
  const products = await Product.find({type: req.params.type}); 
  res.json(products || []);
});


app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, date } = req.body;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = name;
  product.date = date;

  await product.save();

  res.json(product);
});


app.post("/products/:id", (req, res) => {
  const {id} = req.params;
  console.log(req.body);
  const requiredFields = ["type", "productID", "date", "name"];
    for (const field of requiredFields) {
        if (!req.body[field]) {
        return res.status(400).send(`Missing required field: ${field}`);
        }
    }
    Product.create(req.body).then((product) => res.json(product));
  
});

app.put('/products/:a', async (req, res) => {
  const { id } = req.params;
  const { name, date } = req.body;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = name;
  product.date = date;

  await product.save();

  res.json(product);
});


app.put("/products/update", (req, res) => {
  const { filter, update } = req.body;
  Product.updateMany(filter, update)
    .then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});



mongoose
  .connect(
    "mongodb+srv://AdminKtt:Katta123@ktt.yt5wlrj.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected!");

    // Start the server after successful database connection
    app.listen(port, "192.168.1.22", () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
