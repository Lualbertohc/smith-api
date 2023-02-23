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
}