const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const { getAllAuthors } = require('../../models/authorsModel');

describe('1 - Busca todos os autores', () => {
    before( async () => {
        const retorno = [[{
            id: 1,
            first_name: 'pedro',
            middle_name: 'costa',
            last_name: 'almeida',
        }]];
        sinon.stub(connection, 'execute').resolves(retorno);
    });
    after(async () => {
        connection.execute.restore();
    });
    it('verifica se o retorno é um array', async () => {
        const getAuthors = await getAllAuthors();
        expect(getAuthors).to.be.a('array');
    });

    it('verificar se o retorno é um array preenchido por objetos', async () => {
        const [getAuthors] = await getAllAuthors();
        expect(getAuthors).to.be.a('object');
    });
    it('verifica se o retorno é um objeto com: "id, first_name, middle_name, last_name"', async () => {
        // OBS: Verificar qual matcher colocar para verificar direitinho
        const [getAuthors] = await getAllAuthors();
        expect(getAuthors).to.be.includes.all.keys(
            'id',
            'first_name',
            'middle_name',
            'last_name',
        );
    });
});