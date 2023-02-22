import UserModel from '../models/UserModel';
import connection from '../models/connection';
import { IUser } from '../interfaces';
import generate from '../utils/token';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async newUser(user: IUser) {
    await this.model.newUser(user);
    const tokenCode = generate(user);
    return tokenCode;
  }
}