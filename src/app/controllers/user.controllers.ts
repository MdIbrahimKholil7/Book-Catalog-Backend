import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import UserService from "../services/user.service";
import httpStatus from "http-status";
import { generateAccessToken } from "../../shared/jwt";

class User {
  static createUser = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body);

    const result = await UserService.createUserService(req.body);
    const accessToken = generateAccessToken({ ...result });
    res.status(httpStatus.OK).json({
      success: true,
      data: result,
      accessToken,
    });
  });
  static loginUser = catchAsync(async (req: Request, res: Response) => {
    console.log({ body: req.body });
    const result = await UserService.loginUserService(req.body);
    const accessToken = generateAccessToken({ ...result });
    delete result.password;
    res.status(httpStatus.OK).json({
      success: true,
      data: result,
      accessToken,
    });
  });
}

export default User;
