const mogoose = require('mongoose');
const FilmesService = require('../services/filmes.service');
const filmesService = new FilmesService;

class filmesController {
    getFilmes = async (req,res) => {
        const filmes = await filmesService.findAll();
        res.send(filmes);
    }
    getFilmesById = async (req,res) => {
        const idParam = req.params.id;
        const filme = await filmesService.findById(idParam);
        res.send(filme);
    }
    addFilme = async (req,res) => {
        const filme = req.body;
            if(!filme || !filme.nome || !filme.capa || !filme.genero || !filme.nota) {
                res.status(400).send({
                    message: 'Filme não cadastrado esta faltando algum campo!!!'
                })
            return;
            }
            filmesService.add(filme);
            res.status(201).send({
            message: 'Cadastrado com sucesso',
            });
    }
    deleteFilme = async (req,res) => {
        const idParam = req.params.id;
        await filmesService.delete(idParam);
        res.send({
        message: "Filme excluido com sucesso!!!"
        });
    }
    editFilme = async (req, res) => {
        const idParam = req.params.id;
        const filme = req.body;
        await filmesService.edit(idParam,filme);
        
        res.send({
            message: `Filme atualizado com sucesso`,
            })
    }
}

module.exports = filmesController;