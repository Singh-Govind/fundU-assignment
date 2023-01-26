const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment_post_id: { type: String, required: true },
});

const Comment = model("comment", commentSchema);

module.exports = Comment;
