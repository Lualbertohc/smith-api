import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/index';

export default class ProductModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async newUser(user: IUser) {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO 
    Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)`;
    await this.connection.execute(query, [username, vocation, level, password]);
  }
}