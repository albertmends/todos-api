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

let comments = [];

app.get("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);
  const result = comments.filter((c) => c.postId === postId);
  res.json(result);
});

app.post("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);
  const newComment = { id: comments.length + 1, postId, text: req.body.text };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(3000, () => console.log("Server running on port 3000"));
