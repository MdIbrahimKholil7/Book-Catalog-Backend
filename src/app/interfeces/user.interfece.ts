import { Model } from "mongoose";

export type IUser = {
  _id?: Object;
  name: string;
  email: string;
  password?: string;
};

export type IUserModel = Model<IUser>;
