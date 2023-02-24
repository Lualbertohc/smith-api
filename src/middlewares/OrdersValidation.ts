import { NextFunction, Request, Response } from 'express';
import { authToken } from '../utils/token';

export default class OrdersValidation {
  public tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) return res.status(401).json({ message: 'Token not found' });
      const user = authToken(token);
      res.locals.user = user;
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}