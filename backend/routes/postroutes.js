const express = require("express");
const { getAllPost, getUserPost, createPost } = require("../controllers/post");
const auth = require("../middleware/checkauth");

const postRouter = express.Router();

postRouter.post("/addPost", auth, createPost);
postRouter.get("/allposts", getAllPost);
postRouter.get("/userpost", auth, getUserPost);

module.exports = postRouter;
