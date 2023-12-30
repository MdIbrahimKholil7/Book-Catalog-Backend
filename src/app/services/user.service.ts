import { comparePassword } from "../../shared/passwordHash";
import { IUser } from "../interfeces/user.interfece";
import UserModel from "../models/User.Model";

interface ILoginData {
  email: string;
  password: string;
}
class UserService {
  static createUserService = async (payload: IUser): Promise<IUser> => {
    const result = await UserModel.create(payload);
    return result.toObject();
  };
  static loginUserService = async ({ email, password }: ILoginData) => {
    const result = await UserModel.findOne({ email });
    console.log({ result });
    console.log({ email, password });
    if (!result) {
      throw new Error("No User found");
    }
    if (result.password && (await comparePassword(password, result.password))) {
      return result.toObject();
    } else {
      throw new Error("Invalid password");
    }
  };
}

export default UserService;
