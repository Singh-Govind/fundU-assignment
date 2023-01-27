const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  First_Name: { type: String },
  last_name: { type: String },
  email: { type: String, required: true },
  Password: { type: String, required: true },
  username: { type: String, required: true },
  userpic_url: {
    type: String,
    required: true,
    default: "https://randomuser.me/api/portraits/med/men/81.jpg",
  },
  Followers: { type: Number, default: 0 },
  Followings: { type: Number, default: 0 },
  number_of_posts: { type: Number, default: 0 },
  premium_status: { type: Boolean, default: false },
});

const User = model("user", userSchema);

module.exports = User;
