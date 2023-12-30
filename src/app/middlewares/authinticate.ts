import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../shared/jwt";
import httpStatus from "http-status";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  //get authorization token
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: "You are not authorized",
    });
  }
  // verify token
  let verifiedUser = null;

  verifiedUser = verifyToken(token.split(" ")[1]);
  console.log({ verifiedUser });
  req.user = verifiedUser;

  next();
};

export default authenticate;
