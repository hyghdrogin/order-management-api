/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
import { errorMessage, handleError, successMessage } from "../utils";
import { validateOrder, validateOrderUpdate } from "../schema/order";
import { db } from "../models";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const valid = validateOrder(req.body);
    if (valid.error) {
      return errorMessage(res, 400, valid.error.message);
    }
    const order = await db.orders.create({
      data: { ...req.body },
    });
    const { deleted: deletedProp, ...orderData } = order;
    return successMessage(res, 201, "Order Created Successfully", orderData);
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};

export const readOrders = async (req: Request, res: Response) => {
  try {
    const { page, pageSize } = req.query;
    const parsedPage = parseInt(page as string, 10) || 1;
    const parsedPageSize = parseInt(pageSize as string, 10) || 5;

    const skip = (parsedPage - 1) * parsedPageSize;
    const orders = await db.orders.findMany({
      take: parsedPageSize,
      skip,
    });
    const totalOrdersCount = await db.orders.count();
    return successMessage(res, 200, "Orders Fetched Successfully", {
      totalOrdersCount,
      currentPage: parsedPage,
      pageSize: parsedPageSize,
      orders,
    });
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};

export const readOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const order = await db.orders.findFirst({
      where: { id: Number(orderId) },
    });
    if (!order) return errorMessage(res, 400, "Invalid Order");
    const { deleted: deletedProp, ...orderData } = order;
    return successMessage(res, 200, "Order Fetched Successfully", orderData);
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const valid = validateOrderUpdate(req.body);
    if (valid.error) {
      return errorMessage(res, 400, valid.error.message);
    }
    const { status } = req.body;
    const order = await db.orders.findFirst({
      where: { id: Number(orderId) },
    });
    if (!order) return errorMessage(res, 400, "Invalid Order");
    const updatedOrder = await db.orders.update({
      where: { id: Number(orderId) },
      data: { status },
    });
    const { deleted: deletedProp, ...orderData } = updatedOrder;
    return successMessage(res, 200, "Order Updated Successfully", orderData);
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const order = await db.orders.findFirst({
      where: { id: Number(orderId) },
    });
    if (!order) return errorMessage(res, 400, "Invalid Order");
    const deletedOrder = await db.orders.update({
      where: { id: Number(orderId) },
      data: { deleted: true },
    });
    return successMessage(res, 200, "Order Deleted Successfully");
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};
