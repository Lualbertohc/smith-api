import { Pool, ResultSetHeader } from 'mysql2/promise';
import { INewProduct, IProduct } from '../interfaces/index';

export default class ProductModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: INewProduct) {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  }

  public async get() {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as IProduct[];
  }

  public async update(productsIds: number[], orderId: number) {
    const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const result = productsIds.map((e) => this.connection.execute(query, [orderId, e]));
    await Promise.all(result);
    console.log(result);
  }
}