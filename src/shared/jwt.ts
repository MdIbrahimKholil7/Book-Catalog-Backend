import { IUser } from "../app/interfeces/user.interfece";
import { config } from "../config/config";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
// Generate JWT token
const generateAccessToken = <T>(user: Partial<T>): Secret => {
  return jwt.sign(user, config.jwt_secret_key as Secret, {
    expiresIn: config.expires_in as string,
  });
};
const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt_secret_key as Secret) as JwtPayload;
};
export { generateAccessToken, verifyToken };
