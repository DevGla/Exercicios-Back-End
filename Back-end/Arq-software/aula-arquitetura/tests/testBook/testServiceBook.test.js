// verifica se as validações estão corretas
const { expect } = require('chai');
const sinon = require('sinon');

const { isValidBook } = require('../../service/bookService');

describe('2 - Verifica as validações da camada de serviço - Books', () => {
    

    it('Verifica se retorna false', async () => {
        const title = 1; 
    const author_id = 'costa';
    const validService = await isValidBook(title, author_id);
    expect(validService).to.be.equal(false);
    } );
    it('Verifica se retorna true', async () => {
    const title = 'pedro'; 
    const author_id = 1;
    const validService = await isValidBook(title, author_id);
    expect(validService).to.be.equal(true);
    } );
});
