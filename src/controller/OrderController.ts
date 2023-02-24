import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_request: Request, response: Response) => {
    const result = await this.service.getAll();
    return response.status(200).json(result);
  };

  public register = async (request: Request, response: Response) => {
    const { id } = response.locals.user;
    const { productsIds } = request.body;
    const { stts, message } = await this.service.register(id, productsIds);
    if (stts) return response.status(stts).json(message);
    return response.status(201).json(message);
  };
}