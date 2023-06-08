import express from "express"
import {postController} from "../controllers/index.js"
const router = express.Router();

router.get("/", postController.getAllPost);

router.get("/:id", postController.getPostById);

router.post("/", postController.createPost);

router.patch("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

export default router;