function allBooks() {
    //cy.request responsavel por bater no client http
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    });
    
}
export{allBooks};

