const express = require("express");
const Post = require("../models/post.model");

const app = express();

app.get("/allposts", async (req, res) => {
  const { per_page, page, sort } = req.query;

  let sorting = { $sort: { Created_at: -1 } };

  if (sort == "recent") {
    sorting = { $sort: { Created_at: -1 } };
  } else {
    sorting = { $sort: { Rating: 1 } };
  }
  try {
    let posts = await Post.aggregate([
      { $skip: (page - 1 || 0) * 20 },
      { $limit: per_page || 20 },
      sorting,
    ]);
    let total = await Post.find().count();
    let totalPages = Math.ceil(total / (per_page || 20));
    if (posts) {
      return res.send({ posts, totalPages });
    } else {
      return res.status(404).send({ msg: "no post found" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ msg: "something went wrong" });
  }
});

app.get("/myposts", async (req, res) => {
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
