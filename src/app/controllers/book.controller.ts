import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import BookService from "../services/book.service";
import httpStatus from "http-status";

class Book {
  static createBook = catchAsync(async (req: Request, res: Response) => {
    req.body.author = req.user._id;
    const result = await BookService.createBookService(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: result,
    });
  });
  static getBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getBookService();
    console.log({ result });
    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
  static getBookDetails = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.getBookDetailsService(id);
    console.log({ result });
    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
  static updateBook = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body, id);
    const result = await BookService.updateBookService(id, req.body);
    console.log({ result });
    res.status(httpStatus.OK).json(result);
  });
}

export default Book;
