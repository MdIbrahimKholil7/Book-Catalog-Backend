import { IUser } from "../interfeces/user.interfece";
import UserModel from "../models/User.Model";

class UserService {
  static createUserService = async (payload: IUser): Promise<IUser> => {
    const result = await UserModel.create(payload);
    return result;
  };
}

export default UserService;
