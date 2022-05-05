const { isValidBook } = require('../service/bookService');
const { getAllBooks, getbyIdBooks, crateBook } = require('../models/booksModel');

const controllerGetAllBooks = async (req, res) => {
    const books = await getAllBooks();
    return res.status(200).json(books);
}

const controllerGetByIdBook = async (req, res) => {
    const {id} = req.params;
    const book = await getbyIdBooks(id);
    if(!book) return res.status(404).json({message: 'book not found'})
    return res.status(200).json(book);
}

const controllerPostBook = async (req, res) => {
    const {title, author_id} = req.body;

    if(!isValidBook(title, author_id)) return res.status(400).json({message: 'Dados inválidos'})

    await crateBook(title, author_id);

    return res.status(200).json({menssage: 'Author cadastrado com sucesso'})
}

module.exports = {
    controllerGetAllBooks,
    controllerGetByIdBook,
    controllerPostBook,
}