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
  static getBookDetailsService = async (_id: string): Promise<IBook | null> => {
    const result = await BookModel.findById({ _id })
      .populate({
        path: "author",
        select: "-password",
      })
      .limit(10)
      .sort({ createdAt: -1 });
    return result;
  };
  static updateBookService = async <T>(
    id: string,
    payload: Partial<T>
  ): Promise<IBook | null> => {
    const result = await BookModel.findOneAndUpdate(
      { _id: id },
      { ...payload },
      { new: true }
    );
    return result;
  };
}

export default BookService;
