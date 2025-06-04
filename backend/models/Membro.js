const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
  nome: String,
  celular: String,
  dataNascimento: Date,
  endereco: String,
  status: String
});

module.exports = mongoose.model('Membro', MembroSchema);