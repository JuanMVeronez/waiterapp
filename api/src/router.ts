import path from 'node:path';

import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/order/listOrders';
import { createOrder } from './app/useCases/order/createOrder';
import { changeOrderStatus } from './app/useCases/order/changeOrderStatus';
import { cancelOrder } from './app/useCases/order/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      const { originalname } = file;

      callback(null, `${Date.now()}-${originalname}`);
    },
  }),
});

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/categories/:id/products', listProductsByCategory);

router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:id', changeOrderStatus);
router.delete('/orders/:id', cancelOrder);
