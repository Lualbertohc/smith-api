import { Router } from 'express';
import LoginController from '../controller/LoginController';

const productRouter = Router();
const loginController = new LoginController();

productRouter.post('/', loginController.login);

export default productRouter;