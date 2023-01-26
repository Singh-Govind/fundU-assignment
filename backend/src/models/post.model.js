const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  user: { type: String, required: true },
  Text: { type: String },
  Tag: { type: [String] },
  Rating: { type: Number },
});

const Post = model("post", postSchema);

module.exports = Post;
