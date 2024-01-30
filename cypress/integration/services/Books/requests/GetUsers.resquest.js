function allUsers() {
    return cy.request({
        method: 'GET',
        url: 'Users',
        failOnStatusCode: false,
    });
    
}

export{allUsers};