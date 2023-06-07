import express from "express";
import { userController } from "../controllers/index.js";
const router = express.Router();

router.get("/login", userController.login);

router.get("/register", userController.register)

export default router;