import LoginModel from '../models/LoginModel';
import connection from '../models/connection';
import { ILogin } from '../interfaces';
import generate from '../utils/token';

export default class ProductService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(info: ILogin) {
    const { username, password } = info;
    if (!username) return { stts: 400, message: '"username" is required' }; 
    if (!password) return { stts: 400, message: '"password" is required' }; 
    const [newUser] = await this.model.login(info);
    if (!newUser) return { stts: 401, message: 'Username or password invalid' };
    const tokenCode = generate({ ...newUser });
    return { stts: null, message: { token: tokenCode } };
  }
}