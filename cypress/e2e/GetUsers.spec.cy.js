import * as GetUsers from '../integration/services/Books/requests/GetUsers.resquest';

describe ('GetUsers' , () => {
    it('Listar Usuarios' , () => {
        GetUsers.allUsers().then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.not.null;

           })
    });
});