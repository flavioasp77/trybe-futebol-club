import createToken from '../auth/createToken';
import User from '../models/User';

const userLogin = async (email: string, _password: string) => {
  const user = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

  if (!user) return null;

  const token = await createToken(email, user.role);

  console.log('Token no Service ===========>', token);

  return { user, token };
};

export default { userLogin };
