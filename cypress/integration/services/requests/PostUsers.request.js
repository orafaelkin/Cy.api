
const  payloadAddUsers = require('../Payloads/add-user.json')

function addUser() {
    return cy.request({
        method: 'POST',
        url: 'Users',
        failOnStatusCode: false,
        body:  payloadAddUsers
    });
    
}
export{addUser}