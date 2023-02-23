import express from 'express';
import productRouter from './routers/productRounter';
import userRouter from './routers/userRouter';
// import orderRouter from './routers/orderRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/login', loginRouter);

export default app;
