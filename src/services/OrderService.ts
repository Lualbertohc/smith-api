import Joi from 'joi';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';

const schema = Joi.array().items(Joi.number().required()).label('productsIds').messages({
  'array.includesRequiredUnknowns': '{{#label}} must include only numbers',
});

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

  public async register(userId: number, productsIds: number[]) {
    const { error } = schema.validate(productsIds);
    if (error) return { stts: 422, message: { message: error.message } };
    if (!productsIds) return { stts: 400, message: { message: '"productsIds" is required' } };
    const orderId = await this.model.register(userId);
    await this.productsModel.update(productsIds, orderId);
    return { stts: null, message: { userId, productsIds } };
  }
}