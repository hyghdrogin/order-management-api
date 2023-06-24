import { Request, Response } from "express";
import { errorMessage, handleError, successMessage } from "../utils";
import { validateOrder } from "../schema/order";
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
    return successMessage(res, 201, "Order Created Successfully", order);
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};
