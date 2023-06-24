/* eslint-disable new-cap */
import { Router } from "express";
import { createOrder } from "../controllers/orders";

const router = Router();

router.post("/create", createOrder);

export default router;
