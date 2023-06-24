/* eslint-disable new-cap */
import { Router } from "express";
import { readOrders, createOrder, readOrder } from "../controllers/orders";

const router = Router();

router.post("/", createOrder);
router.get("/", readOrders);
router.get("/:orderId", readOrder);

export default router;
