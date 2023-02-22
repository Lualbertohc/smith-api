import { Pool, ResultSetHeader } from 'mysql2/promise';
import { INewProduct } from '../interfaces/index';

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
}