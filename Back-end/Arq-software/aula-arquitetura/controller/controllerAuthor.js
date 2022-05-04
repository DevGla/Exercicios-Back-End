const { getAllAuthors, getByIdAuthor, createAuthor } = require('../models/authorsModel');
const { isValidAuthor } = require('../service/authorService');

const controllerGetAuthor = async (_req, res) => {
    const authors = await getAllAuthors();
    return res.status(200).json(authors);
}

const controllerGetByIdAuthor = async (req, res) => {
    const {id} = req.params;
    const author = await getByIdAuthor(id);
    if(!author) return res.status(404).json({message: 'Author not found'})
    return res.status(200).json(author);
}

const controllerPostAuthor = async (req,res) => {
    const { first_name, middle_name, last_name } = req.body;

    if(!isValidAuthor(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos '})

    await createAuthor(first_name, middle_name, last_name);

    return res.status(201).json({message: 'Author cadastrado com sucesso!'});
}

module.exports = {
    controllerGetAuthor,
    controllerGetByIdAuthor,
    controllerPostAuthor,
}