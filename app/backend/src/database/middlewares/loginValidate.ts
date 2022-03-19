import { NextFunction, Request, Response } from 'express';

const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);

  if (!validEmail) return res.status(401).json({ message: 'Incorrect email or password' });

  next();
};

export default {
  validateEmail,
};
