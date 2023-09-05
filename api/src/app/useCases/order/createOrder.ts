import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { io } from '../../..';

export async function createOrder(req: Request, res: Response) {
  try {
    const { products, table } = req.body;

    const order = await Order.create({ products, table });

    const orderDetails = await order.populate('products.product');
    io.emit('orders@new', orderDetails);

    return res.status(201).json(order);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
