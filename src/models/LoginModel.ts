import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces/index';

export default class ProductModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(info: ILogin) {
    const { username, password } = info;
    const q = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
    const [newUser] = await this.connection.execute<RowDataPacket[]>(q, [username, password]);
    return newUser as IUser[];
  }
}