import { Router } from 'express';
import OrderController from '../controller/OrderController';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

export default orderRouter;