import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `
    SELECT orders.id AS id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products ON orders.id = products.order_id GROUP BY 
    orders.id, 
    orders.user_id`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IOrder[];
  }
}