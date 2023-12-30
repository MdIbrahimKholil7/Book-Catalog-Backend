import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export const config = {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  expires_in: process.env.JWT_EXP,
  jwt_secret_key: process.env.SECRET_KEY,
};
