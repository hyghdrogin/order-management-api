import { Router as userRouter } from "express";
import { signinUser, signupUser } from "../controllers/users";

const router = userRouter();

router.post("/register", signupUser);
router.post("/signin", signinUser);

export default router;
