import { Signup, Login } from "../controllers/authController.js";
import { userVerification } from "../middlewares/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

export default router;
