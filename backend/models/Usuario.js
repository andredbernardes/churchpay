const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
  papel: { type: String, enum: ['admin', 'membro'], default: 'membro' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);