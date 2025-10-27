// index.js
const express = require("express");
const app = express();
app.use(express.json());

let posts = [];

app.get("/posts", (req, res) => res.json(posts));

app.post("/posts", (req, res) => {
  const newPost = { id: posts.length + 1, title: req.body.title };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(3000, () => console.log("Server running on port 3000"));
