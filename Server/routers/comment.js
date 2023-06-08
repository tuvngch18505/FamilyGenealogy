import express from "express"
import { commentController } from "../controllers/index.js"
const router = express.Router();

router.get('/', commentController.getAllComment);
router.get('/:id', commentController.getCommentById);
router.post('/', commentController.createComment);
router.patch('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);


export default router;