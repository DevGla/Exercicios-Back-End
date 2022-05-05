const express = require('express');
const router = express.Router();
const {
    controllerGetAllBooks ,
    controllerGetByIdBook,
    controllerPostBook } = require('../controller/controllerBook');

router.get('/books', controllerGetAllBooks);
router.get('/books/:id', controllerGetByIdBook);
router.post('/books', controllerPostBook);

module.exports = router;