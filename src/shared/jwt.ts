import { config } from "../config/config";
import jwt from "jsonwebtoken";
// Generate JWT token
const generateAccessToken = <T>(user: Partial<T>) => {
  return jwt.sign(user, config.jwt_secret_key as string, {
    expiresIn: config.expires_in as string,
  });
};

export { generateAccessToken };
