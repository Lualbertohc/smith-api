import Joi from 'joi';
import UserModel from '../models/UserModel';
import connection from '../models/connection';
import { IUser } from '../interfaces';
import generate from '../utils/token';

const schema = Joi.object({
  username: Joi.string().min(3),
  password: Joi.string().min(8),
  vocation: Joi.string().min(3),
  level: Joi.number().min(1),
});

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async newUser(user: IUser) {
    const { error } = schema.validate(user);
    if (error) return { stts: 422, message: error.message };
    await this.model.newUser(user);
    const tokenCode = generate(user);
    return { stts: null, message: tokenCode };
  }
}