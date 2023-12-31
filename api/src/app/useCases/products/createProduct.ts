import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const { category, description, ingredients, name, price } = req.body;

    const product = await Product.create({
      category,
      description,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      name,
      price: Number(price),
    });

    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
