const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
    controllerGetAuthor,
    controllerGetByIdAuthor,
    controllerPostAuthor } = require('./controller/controllerAuthor');
const {
    controllerGetAllBooks ,
    controllerGetByIdBook,
    controllerPostBook } = require('./controller/controllerBook')

const PORT = 3010;

app.use(bodyParser.json());

app.get('/author', controllerGetAuthor)

app.get('/author/:id', controllerGetByIdAuthor)

app.post('/author', controllerPostAuthor)

app.get('/books', controllerGetAllBooks)

app.get('/books/:id', controllerGetByIdBook)

app.post('/books', controllerPostBook)

app.listen(PORT, ()=> console.log(`ouvindo a porta ${PORT}`));