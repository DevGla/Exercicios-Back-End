// verifica se as validações estão corretas
const { expect } = require('chai');
const sinon = require('sinon');

const { isValidAuthor } = require('../../service/authorService');

describe('2 - Verifica as validações da camada de serviço - Author', () => {
    

    it('Verifica se retorna false', async () => {
        const first_name = 1; 
        const middle_name = 'asd'; 
        const last_name = 'pedro'; 
        const validService = await isValidAuthor(first_name, middle_name, last_name);
        expect(validService).to.be.equal(false);
    } );
    it('Verifica se retorna true', async () => {
    const first_name = 'pedro'; 
    const middle_name = 'pedro'; 
    const last_name = 'pedro';
    const validService = await isValidAuthor(first_name, middle_name, last_name);
    expect(validService).to.be.equal(true);
    } );
});



