import { Request, Response } from 'express';
import ProductService from '../services/ProdctService';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (request: Request, response: Response) => {
    const { stts, message } = await this.service.create(request.body);
    if (stts) return response.status(stts).json({ message });
    return response.status(201).json(message);
  };

  public get = async (_request: Request, response: Response) => {
    const result = await this.service.get();
    return response.status(200).json(result);
  };
}