import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';

export default class OrderService {
  public model: OrderModel;

  public productsModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productsModel = new ProductModel(connection);
  }

  public async getAll() {
    const result = await this.model.getAll();
    return result;
  }
}