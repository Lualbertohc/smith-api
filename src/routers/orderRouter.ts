import { Router } from 'express';
import OrderController from '../controller/OrderController';
import OrdersValidation from '../middlewares/OrdersValidation';

const orderRouter = Router();
const orderController = new OrderController();
const validation = new OrdersValidation();

orderRouter.get('/', orderController.getAll);

orderRouter.post('/', validation.tokenValidation, orderController.register);

export default orderRouter;