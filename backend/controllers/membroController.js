const Membro = require('../models/Membro');

exports.listarMembros = async (req, res) => {
  const membros = await Membro.find();
  res.json(membros);
};

exports.criarMembro = async (req, res) => {
  const membro = new Membro(req.body);
  await membro.save();
  res.status(201).json(membro);
};