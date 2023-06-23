import Joi from "joi";
import { RegisterData, loginData } from "../utils";

const options = {
  stripUnknown: true,
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const validateSignUp = (signup: RegisterData) => {
  const userSignUp = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(36).required(),
  });
  return userSignUp.validate(signup, options);
};

export const validateSignIn = (signIn: loginData) => {
  const userSignIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(36).required(),
  });
  return userSignIn.validate(signIn, options);
};
