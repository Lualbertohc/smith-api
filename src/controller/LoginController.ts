import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class ProductController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (request: Request, response: Response) => {
    const { stts, message } = await this.service.login(request.body);
    if (stts) return response.status(stts).json({ message });
    return response.status(200).json(message);
  };
}