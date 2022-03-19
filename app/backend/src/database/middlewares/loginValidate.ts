import { NextFunction, Request, Response } from 'express';

const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);

  if (!email) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (!validEmail) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (password.length < 7) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

export default {
  validateEmail,
  validatePassword,
};
