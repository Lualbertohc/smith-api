import { NextFunction, Request, Response } from 'express';

export default class Validation {
  public users = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username) return res.status(400).json({ message: '"username" is required' });
    if (!req.body.password) return res.status(400).json({ message: '"password" is required' });
    if (!req.body.vocation) return res.status(400).json({ message: '"vocation" is required' });
    if (req.body.level === undefined) {
      return res.status(400).json({ message: '"level" is required' });
    }
    next();
  };
}
