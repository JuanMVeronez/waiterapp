import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo com sucesso');

    const app = express();

    app.use(express.json());
    app.use(router);

    const port = 3001;
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
  })
  .catch(() => console.log('Erro ao conectar com o mongo'));

