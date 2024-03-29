import mongoose, { Model } from "mongoose";
interface IReview {
  user: mongoose.Types.ObjectId;
  review: string;
}
export type IBook = {
  title: string;
  author: mongoose.Types.ObjectId;
  genre: string;
  reviews: IReview[];
  img?: string;
};

export type IBookModel = Model<IBook>;
