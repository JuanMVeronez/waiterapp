import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // sort by createdAt, 1 is asc -1 is desc
      .populate('products.product'); // populate get products values

    return res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
