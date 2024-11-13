import express from "express";
import mongoose from "mongoose";

import createPost from "./routes/post.js";

const app = express();
const port = 3000;
//agar client atau pengguna server dapat mengakses gambar
app.use(express.static("public/uploads"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/blog", createPost);

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

mongoose
  .connect("mongodb://localhost:27017/blogDB")
  .then(() => app.listen(port))
  .then(() => console.log(`Server is running on port http://localhost:${port}`))
  .catch((err) => console.log(`connection error: ${err}`));
