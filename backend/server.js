const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rotas
const authRoutes = require('./routes/authRoutes');
const membroRoutes = require('./routes/membroRoutes');

app.use('/auth', authRoutes);
app.use('/membros', membroRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});