import { Router } from 'express';
import UserController from '../controller/UserController';
import Validation from '../middlewares/Validation';

const userRouter = Router();
const userController = new UserController();
const validation = new Validation();

userRouter.post('/', validation.users, userController.newUser);

export default userRouter;