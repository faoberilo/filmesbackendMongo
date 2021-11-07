const express = require('express');
const cors = require('cors'); 
const port = 3000;
const app = express();
const Conn = require('./conn/conn');
const Filme = require('./models/filme');
const filmesRouter = require('./routes/filmes.routes');

app.use(express.json());
app.use(cors());    
app.use('/filmes', filmesRouter);

Conn();
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  })