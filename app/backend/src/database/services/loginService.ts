import { IUser } from '../interfaces/userInterfaces';
import User from '../models/User';

const userLogin = async (email: string) => {
  const user: IUser | null = await User.findOne({ where: { email } });

  return user;
};

export default { userLogin };
