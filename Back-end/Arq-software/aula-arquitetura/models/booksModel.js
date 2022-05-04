const connection = require('../models/connection');

const getAllBooks = async () => {
    const [allBooks] = await connection.execute('SELECT id, title, author_id FROM books;')
    return allBooks;
}

const getbyIdBooks = async (id) => {
    const [book] = await connection.execute('SELECT id, title, author_id FROM books WHERE id= ?;', [id]);
    if(book.length === 0) return null;
    return book;
}

const crateBook = async (title, author_id) => {
    const [book] = await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]);
    return book;
}


module.exports = {
    getAllBooks,
    getbyIdBooks,
    crateBook,
}