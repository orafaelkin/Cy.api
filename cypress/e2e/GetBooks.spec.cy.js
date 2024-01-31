//importando a function 
import * as GetBooks from  '../integration/services/requests/GetBooks.request';

describe ('GetBooks' , () => {
    it('Listar Livros' , () => {
        GetBooks.allBooks().then((response) => {
        
          expect(response.status).to.equal(200);
          expect(response.body).to.be.not.null;
          if (response.status == 200) {
            cy.log("200 ok");
          }
        else 
            cy.console.log(response.status);

           })
    });
});