import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo com sucesso');

    const app = express();

    app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
  })
  .catch(() => console.log('Erro ao conectar com o mongo'));

