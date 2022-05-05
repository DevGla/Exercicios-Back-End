const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routesAuthor = require('./Arq-software/aula-arquitetura/routes/routesAuthor');
const routesBooks = require('./Arq-software/aula-arquitetura/routes/routesBooks');

const PORT = 3010;

app.use(bodyParser.json());

app.use('/', routesAuthor);
app.use('/', routesBooks);

app.listen(PORT, ()=> console.log(`ouvindo a porta ${PORT}`));