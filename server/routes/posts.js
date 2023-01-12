import express from "express";
import { getPosts, createPost } from "../controllers/posts.js"; //.js not required in React but it is required in node

const router = express.Router();

//localhost:3000/posts is how these routes will be reached

router.get("/", getPosts);
router.post("/", createPost);

export default router;
