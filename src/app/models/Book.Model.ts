import { Schema, model } from "mongoose";
import { IBook, IBookModel } from "../interfeces/book.interfaces";

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    genre: {
      type: String,
      required: true,
    },
    reviews: [
      {
        user: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        review: String,
        rating: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const BookModel = model<IBook, IBookModel>("Book", BookSchema);
export default BookModel;
