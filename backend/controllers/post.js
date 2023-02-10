const { Post } = require("../models/Post");

async function createPost(req, res) {
  try {
    const user = req.user;

    const { title, content, postimg, likes } = req.body;
    const data = req.body;
    const post = await Post.create({
      title,
      content,
      postimg,
      likes,

      author: {
        userId: user._id,
        name: user.name,
      },
    });
    return res.status(201).send({
      data: post,
    });
  } catch (error) {
    return res.status(500).send({
      error: "Something went wrong.",
      log: function () {
        console.error(error.message);
      },
    });
  }
}

async function getAllPost(req, res) {
  try {
    let post = await Post.find();
    let totalPost = await Post.count();
    return res.status(200).send({
      data: {
        posts: post,
        totalPosts: totalPost,
      },
    });
  } catch (error) {
    return res.status(500).send({
      error: "Something went wrong.",
      log: function () {
        console.error(error.message);
      },
    });
  }
}

async function getUserPost(req, res) {
  try {
    let { id } = req.params;
    let post = await Post.find({ id });
    let totalPost = await Post.count({ id });
    return res.status(200).send({
      data: {
        posts: post,
        totalPosts: totalPost,
      },
    });
  } catch (error) {
    return res.status(500).send({
      error: "Something went wrong.",
      log: function () {
        console.error(error.message);
      },
    });
  }
}
module.exports = { getAllPost, getUserPost, createPost };
