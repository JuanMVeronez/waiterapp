import { Router } from 'express';

export const router = Router();

router.get('/products', (req, res) => res.send('List products'));

router.post('/products', (req, res) => res.send('Create product'));

router.get('/categories', (req, res) => res.send('List categories'));

router.post('/categories', (req, res) => res.send('Create category'));

router.post('/categories/:id/products', (req, res) => res.send('Products of category'));

router.get('/orders', (req, res) => res.send('List orders'));

router.post('/orders', (req, res) => res.send('Create order'));

router.patch('/orders/:id', (req, res) => res.send('Change order status'));

router.delete('/orders/:id', (req, res) => res.send('Delete order'));
