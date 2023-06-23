/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import { validateSignIn, validateSignUp } from "../schemas/users";
import { errorMessage, successMessage, handleError } from "../utils";
import { db } from "../models";
import { generateToken } from "../utils/helpers";

export const signupUser = async (req: Request, res: Response) => {
  try {
    const valid = validateSignUp(req.body);
    if (valid.error) {
      return errorMessage(res, 400, valid.error.message);
    }
    const { name, email, password } = req.body;
    const user = await db.users.findFirst({
      where: {
        email,
      },
    });
    if (user) return errorMessage(res, 409, "User Exist");
    const userData = {
      name,
      password: hashSync(password, 10),
      email,
    };
    await db.users.create({
      data: {
        ...userData,
      },
    });
    return successMessage(res, 201, "User Created");
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};

export const signinUser = async (req: Request, res: Response) => {
  try {
    const valid = validateSignIn(req.body);
    if (valid.error) {
      return errorMessage(res, 400, valid.error.message);
    }
    const { email, password } = req.body;
    const user = await db.users.findFirst({
      where: {
        email,
      },
    });
    if (!user) return errorMessage(res, 409, "User Exist");
    const passwordMatch = compareSync(password, user.password);
    console.log(passwordMatch);
    if (!passwordMatch)
      return errorMessage(res, 403, "Incorrect Login Details");
    const token = await generateToken({
      id: user.id,
      email,
    });
    const { password: newPassword, ...userDetails } = user;
    return successMessage(res, 200, "User Logged In", { token, userDetails });
  } catch (error) {
    handleError(error, req);
    return errorMessage(res, 500, (error as Error).message);
  }
};
