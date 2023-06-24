import Joi from "joi";
import { OrderData } from "../utils";

const options = {
  stripUnknown: true,
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const validateOrder = (createOrder: OrderData) => {
  const order = Joi.object({
    email: Joi.string().email().required(),
    productName: Joi.string().min(5).max(100).required(),
    quantity: Joi.number().required(),
  });
  return order.validate(createOrder, options);
};
