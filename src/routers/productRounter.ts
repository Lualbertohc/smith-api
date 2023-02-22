import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', productController.create);

productRouter.get('/', productController.get);

export default productRouter;
