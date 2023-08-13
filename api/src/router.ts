import path from 'node:path';

import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';

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

router.post('/categories/:id/products', (req, res) => res.send('Products of category'));

router.get('/orders', (req, res) => res.send('List orders'));

router.post('/orders', (req, res) => res.send('Create order'));

router.patch('/orders/:id', (req, res) => res.send('Change order status'));

router.delete('/orders/:id', (req, res) => res.send('Delete order'));
