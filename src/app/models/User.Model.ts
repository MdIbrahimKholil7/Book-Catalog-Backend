import { Schema, model } from "mongoose";
import { IBook, IBookModel } from "../interfeces/book.interfaces";
import { IUser, IUserModel } from "../interfeces/user.interfece";
import { hashPassword } from "../../shared/passwordHash";

interface IUserDocument extends IUser, Document {}
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.pre<IUserDocument>("save", async function (next) {
  // Check if the user with the same email already exists
  const existingUser = await UserModel.findOne({ email: this.email });
  if (existingUser) {
    // If user already exists, throw an error or handle it as needed
    const error = new Error("User with this email already exists");
    return next(error);
  }
  if (this.password) {
    // Hash the password only if it has been modified (or is new)
    this.password = await hashPassword(this.password);
  }
  next();
});
const UserModel = model<IUser, IUserModel>("User", UserSchema);
export default UserModel;
