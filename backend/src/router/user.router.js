const express = require("express");
const User = require("../models/user.model");

const app = express.Router();

app.post("/singup", async (req, res) => {
  try {
    let user = await User.create(req.body);
    return res.send({ msg: "user created", user });
  } catch (e) {
    res.status(500).send({ msg: "Some thing went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username: username });
    let toSend = await User.findOne({ username: username }, { Password: 0 });

    if (user) {
      if (password === user.password) {
        return res.send({ user: toSend });
      } else {
        return res.status(403).send({ msg: "password not match" });
      }
    } else {
      return res.status(404).send({ msg: "user not found" });
    }
  } catch (e) {
    res.status(500).send({ msg: "Some thing went wrong" });
  }
});

module.exports = app;
