import * as GetUsers from '../integration/services/requests/GetUsers.resquest';


describe ('GetUsers' , () => {
    it('Get API' , () => {
        GetUsers.allUsers().then((response) => {
          expect(response.status).to.equal(200);  // igual a 200
            
          if (response.status == 200 || response.body == JSON){
            cy.log('200 OK');
            
        } 
          else {
              cy.log(response.status);
          }
        })
    });

    it('Get Array' , () => {
        GetUsers.getArray().then((response) => {
            expect(response.body).to.be.not.null;  // NAO PODE SER NULO
            const segundoUsuario = response.body[1];
            
            cy.log("Id",segundoUsuario.id);
            cy.log("Nome",segundoUsuario.userName);
            cy.log("Senha",segundoUsuario.password);
            //expect(response.body).to.have.property("userName")

        })

    })
});