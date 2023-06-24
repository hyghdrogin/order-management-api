/* eslint-disable new-cap */
import { Router } from "express";
import {
  readOrders,
  createOrder,
  readOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders";

const router = Router();

router.post("/", createOrder);
router.get("/", readOrders);
router.get("/:orderId", readOrder);
router.patch("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;
