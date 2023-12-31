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

    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
  static getAllBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getAllBookService();

    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
  static getBookDetails = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.getBookDetailsService(id);

    res.status(httpStatus.OK).json({
      success: true,
      data: result,
    });
  });
  static updateBook = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BookService.updateBookService(id, req.body);

    res.status(httpStatus.OK).json(result);
  });
  static addBookReview = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BookService.addReviewForBookService(id, {
      ...req.body,
      user: req.user._id,
    });

    res.status(httpStatus.OK).json(result);
  });
  static deleteBook = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    const result = await BookService.deleteBookService(id);
    console.log({ result });
    if (!result) return res.status(500).json("Can't delete this");
    res.status(httpStatus.OK).json(result);
  });
}

export default Book;
