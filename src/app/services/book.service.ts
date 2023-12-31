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
  static getAllBookService = async (): Promise<IBook[]> => {
    const result = await BookModel.find()
      .populate({
        path: "author",
        select: "-password",
      })

      .sort({ createdAt: -1 });
    return result;
  };
  static getBookDetailsService = async (_id: string): Promise<IBook | null> => {
    const result = await BookModel.findById({ _id })
      .populate({
        path: "author",
        select: "-password",
      })
      .populate({
        path: "reviews.user",
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

  static addReviewForBookService = async <T>(
    id: string,
    payload: Partial<T>
  ) => {
    console.log({ payload, id });
    const result = await BookModel.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: payload } },
      { new: true, upsert: true }
    );
    return result;
  };
  static deleteBookService = async <T>(id: string) => {
    const result = await BookModel.findOneAndDelete({ _id: id });
    return result;
  };
}

export default BookService;
