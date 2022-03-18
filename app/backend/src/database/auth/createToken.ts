import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';

const createToken = async (email: string, role: string) => {
  const SECRET = await fs.readFile('jwt.evaluation.key', 'utf-8');

  const token: string = jwt.sign(
    {
      role,
      email,
    },
    SECRET,
    {
      expiresIn: '15d',
      algorithm: 'HS256',
    },
  );

  console.log(token);

  return token as string;
};

export default createToken;
