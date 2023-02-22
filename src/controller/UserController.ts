import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public newUser = async (request: Request, response: Response) => {
    const result = await this.service.newUser(request.body);
    return response.status(201).json({ token: result });
  };
}