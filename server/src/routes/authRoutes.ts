import { Router } from "express";

import authController from "../controllers/authController";

import { validRegister } from "../middleware/validators";

const router = Router();

router.post("/register", validRegister, authController.register);

export default router;
