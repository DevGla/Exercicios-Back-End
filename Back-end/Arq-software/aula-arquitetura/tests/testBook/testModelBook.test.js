const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const { getAllBooks } = require('../../models/booksModel');

describe('Busca todos os autores', () => {
    before( async () => {
        const retorno = [[{
            title: 'inteligencia emocional',
            id: 1,
            author_id: 'eu',
        }]];
        sinon.stub(connection, 'execute').resolves(retorno);
    });
    after(async () => {
        connection.execute.restore();
    });
    it('verifica se o retorno é um array', async () => {
        const getBooks = await getAllBooks(); 
        expect(getBooks).to.be.a('array');
    });

    it('verificar se o retorno é um array preenchido por objetos', async () => {
        const [getBooks] = await getAllBooks();
        expect(getBooks).to.be.a('object');
    });
    it('verifica se o retorno é um objeto com: "title, id, author_id"', async () => {
        // OBS: Verificar qual matcher colocar para verificar direitinho
        const [getBooks] = await getAllBooks();
        expect(getBooks).to.be.includes.all.keys(
            'title',
            'id',
            'author_id',
        );
    });
});