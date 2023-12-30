import { JwtPayload } from "jsonwebtoken";
import { IUser } from "./user.interfece";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | IUser;
    }
  }
}
