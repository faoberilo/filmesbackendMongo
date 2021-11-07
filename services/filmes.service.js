const Filme = require('./../models/filme');

class filmesService{
    findAll = async () => await Filme.find();
    findById = async (id) => await Filme.findById(id);
    add = async(filme) => await Filme.create(filme);
    delete = async (id) => await Filme.findByIdAndRemove(id);
    edit = async (id,filme) => await Filme.findByIdAndUpdate(id, filme, {new:true});
}

module.exports = filmesService;