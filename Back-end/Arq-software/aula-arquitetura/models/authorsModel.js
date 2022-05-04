const connection = require('../models/connection');

const getAllAuthors = async () => {
    const [all] = await connection.execute('SELECT id, first_name, last_name, middle_name FROM authors;');
    return all;
}

const getByIdAuthor = async (id) => {
    const [author] = await connection.execute('SELECT id, first_name, last_name, middle_name FROM authors WHERE id= ?;', [id]);
    if(author.length === 0) return null;
    return author;
}

const createAuthor = async (first_name, middle_name, last_name) => {
    const [author] = await connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);', [first_name, middle_name, last_name]);
    return author;
}

module.exports = {
    getAllAuthors,
    getByIdAuthor, 
    createAuthor,
}