import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/blogDB");

app.listen(port, (req, res) => {
  console.log(`Server is running on port http://localhost:${port}`);
});
