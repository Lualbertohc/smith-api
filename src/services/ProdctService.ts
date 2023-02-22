import ProductModel from '../models/ProductModel';
import connection from '../models/connection';
import { INewProduct } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: INewProduct) {
    const result = await this.model.create(product);
    return { id: result, ...product };
  }

  public async get() {
    const result = await this.model.get();
    return result;
  }
}