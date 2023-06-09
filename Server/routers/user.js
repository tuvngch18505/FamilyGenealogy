import express from "express";
import { userController } from "../controllers/index.js";
const router = express.Router();


router.delete("/:id", userController.deleteUser);
router.post("/:id", userController.updateUser);
router.post("/id")
router.get("/", userController.getAllUser);

export default router;