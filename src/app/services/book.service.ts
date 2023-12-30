import { IBook } from "../interfeces/book.interfaces";
import BookModel from "../models/Book.Model";

class BookService {
  static createBookService = async (payload: IBook): Promise<IBook> => {
    const result = await BookModel.create(payload);
    return result.toObject();
  };
  static getBookService = async (): Promise<IBook[]> => {
    const result = await BookModel.find()
      .populate({
        path: "author",
        select: "-password",
      })
      .limit(10)
      .sort({ createdAt: -1 });
    return result;
  };
}

export default BookService;
