const express = require("express");
const Comment = require("../models/comment.model");

const app = express();

app.get("/", async (req, res) => {
  const id = req.body.post_id;

  try {
    let comments = await Comment.find({ comment_post_id: id });
    if (comments) {
      res.send({ comments: comments });
    } else {
      return res.status(404).send({ msg: "no comments" });
    }
  } catch (e) {
    res.status(500).send({ msg: "something went wrong" });
  }
});

module.exports = app;
