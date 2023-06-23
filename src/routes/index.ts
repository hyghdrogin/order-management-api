import { Router as expRouter } from "express";
import userRouter from "./users";

const router = expRouter();

router.use("/users", userRouter);

export default router;
