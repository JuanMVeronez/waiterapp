import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo com sucesso');

    const app = express();

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'https://studious-fishstick-w9xj956g7jrfxwx-5173.app.github.dev');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(router);

    const port = 3001;
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
  })
  .catch(() => console.log('Erro ao conectar com o mongo'));

