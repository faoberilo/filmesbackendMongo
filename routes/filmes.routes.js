const express = require('express');
const router = express.Router();
const FilmesController = require('./../controllers/filmes.controllers');

const filmesController = new FilmesController;

router.get("/", filmesController.getFilmes);

router.get("/:id", filmesController.getFilmesById);

router.post("/add", filmesController.addFilme);

router. delete('/delete/:id', filmesController.deleteFilme);

router.put('/edit/:id', filmesController.editFilme);



module.exports = router;
