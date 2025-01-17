//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6626;

app.use(express.json()); //allows us to use json data in the body

app.use("/api/products", productRoutes)


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+ PORT);
});