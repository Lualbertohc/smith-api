import { Request, Response } from 'express';
import ProductService from '../services/ProdctService';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (request: Request, response: Response) => {
    const result = await this.service.create(request.body);
    return response.status(201).json(result);
  };

  public get = async (_request: Request, response: Response) => {
    const result = await this.service.get();
    return response.status(200).json(result);
  };
}