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

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               productName:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid request payload
 *       500:
 *         description: Internal server error
 */
router.post("/", createOrder);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Orders fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get("/", readOrders);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: ID of the order
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order fetched successfully
 *       400:
 *         description: Invalid order ID
 *       500:
 *         description: Internal server error
 */
router.get("/:orderId", readOrder);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   patch:
 *     summary: Update an order's status
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: ID of the order
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [canceled, delivered]
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Invalid order ID or status
 *       500:
 *         description: Internal server error
 */
router.patch("/:orderId", updateOrder);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: ID of the order
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       400:
 *         description: Invalid order ID
 *       500:
 *         description: Internal server error
 */
router.delete("/:orderId", deleteOrder);

export default router;
