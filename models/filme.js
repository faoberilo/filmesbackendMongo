const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
    nome: { type: String, required: true },
    capa: { type: String, required: true },
    genero: { type: String, required: true },
    nota: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
  });
  
  const Filme = mongoose.model('filmes', filmeModel);
  
  module.exports = Filme;