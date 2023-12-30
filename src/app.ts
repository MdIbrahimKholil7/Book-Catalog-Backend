import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";

import morgan from "morgan";
import httpStatus from "http-status";
import userRoute from "./app/routes/user.route";
import bookRoute from "./app/routes/book.route";
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/book", bookRoute);

// for testing purposes
app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    message: "Success",
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json({
    success: false,
    message: err.message,
  });
});
// 404 route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});
export default app;
