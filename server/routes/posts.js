import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js"; //.js not required in React but it is required in node

const router = express.Router();

//localhost:3000/posts is how these routes will be reached

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost); //used for updating existing documents
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost); //updating number of likes

export default router;
