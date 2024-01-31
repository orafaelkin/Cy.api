import * as PostUsers from '../integration/services/requests/PostUsers.request'

describe ('Post User' , () => {
    it('Adicionando Usuário' , () => {
        PostUsers.addUser().then((response) => {
          expect(response.status).to.equals(200);
          expect(response.body.userName).to.equals("Rafael");  

        })
    })
})    