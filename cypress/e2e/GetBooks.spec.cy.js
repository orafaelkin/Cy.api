//importando a function 
import * as GetBooks from  '../integration/services/Books/requests/GetBooks.request';

describe ('GetBooks' , () => {
    it('Listar Livros' , () => {
        GetBooks.allBooks().then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.not.null;

           })
    });
});