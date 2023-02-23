import Joi from 'joi';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';
import { INewProduct } from '../interfaces';

const schema = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: INewProduct) {
    const { error } = schema.validate(product);
    if (error) return { stts: 422, message: error.message }; 
    if (!product.name) return { stts: 400, message: '"name" is required' };
    if (!product.amount) return { stts: 400, message: '"amount" is required' };
    const result = await this.model.create(product);
    return { stts: null, message: { id: result, ...product } };
  }

  public async get() {
    const result = await this.model.get();
    return result;
  }
}