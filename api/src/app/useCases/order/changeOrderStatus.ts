import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) return res.status(400).json({
      error: 'Invalid status, value should be one of this: WAITING, IN_PRODUCTION or DONE',
    });

    await Order.findByIdAndUpdate(id, { status });

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
