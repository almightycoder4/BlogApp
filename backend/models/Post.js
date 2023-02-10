const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  postimg: {
    type: String,
    require: true,
  },
  likes: Number,
  date: { type: Date, default: Date.now },
  author: {
    userId: String,
    name: String,
  },
});
const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };
