import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import UserService from "../services/user.services";
import httpStatus from "http-status";

class User {
  static createUser = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await UserService.createUserService(req.body);
    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
}

export default User;
