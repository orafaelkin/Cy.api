import * as GetUsers from '../integration/services/requests/GetUsers.resquest';


describe ('GetUsers' , () => {
    it('Get API' , () => {
        GetUsers.allUsers().then((response) => {
          expect(response.status).to.equal(200);  // igual a 200
          expect(response.body).to.be.not.null;  //nao pode ser nulo

          if (response.status == 200 || response.body == JSON){
            cy.log('200 OK');

          } 
          else {
              cy.log(response.status);
          }
        })
    });

    it('Get Array' , () => {
        GetUsers.getArray().then((response) =>{

        })

    })
});