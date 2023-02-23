import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public newUser = async (request: Request, response: Response) => {
    const { stts, message } = await this.service.newUser(request.body);
    if (stts) return response.status(stts).json({ message });
    return response.status(201).json({ token: message });
  };
}