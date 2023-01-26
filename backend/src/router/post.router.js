const express = require("express");
const Post = require("../models/post.model");

const app = express();

app.get("/", async (req, res) => {
  const user = req.headers["authorization"];
  try {
    let posts = await Post.find({ user: user });

    if (posts) {
      res.send(posts);
    } else {
      res.status(404).send({ msg: "no post found" });
    }
  } catch (e) {
    res.status(500).send({ msg: "something went wrong" });
  }
});

module.exports = app;
