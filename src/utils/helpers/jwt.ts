import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JwtGenerationPayload } from "../../utils";

dotenv.config();
const secretKey = process.env.JWT_KEY;

export const generateToken = async (
  payload: JwtPayload,
  secret = secretKey
) => {
  const token = jwt.sign(payload, secret as string, { expiresIn: "2d" });
  return token;
};

export const validateUserToken = async (token: string) => {
  try {
    const key = process.env.JWT_KEY || "secret";
    const data = jwt.verify(token, key) as JwtGenerationPayload;
    if (!data) return;

    return data;
  } catch (e) {
    console.error("a JWT error occurred:", e);
  }
};
