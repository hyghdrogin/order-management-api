/* eslint-disable new-cap */
import { Router } from "express";
import orderRoutes from "./order";

const router = Router();

router.use("/orders", orderRoutes);

export default router;
