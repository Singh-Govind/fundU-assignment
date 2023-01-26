const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment_post_id: { type: String, required: true },
});

const Comment = model("user", commentSchema);

module.exports = Comment;
