import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import BookService from "../services/book.service";
import httpStatus from "http-status";

class Book {
  static createBook = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.user);
    req.body.author = req.user._id;
    const result = await BookService.createBookService(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: result,
    });
  });
  static getBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getBookService();
    res.status(httpStatus.CREATED).json({
      success: true,
      data: result,
    });
  });
}

export default Book;
