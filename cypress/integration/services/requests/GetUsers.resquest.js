function allUsers() {
    return cy.request({
        method: 'GET',
        url: 'Users',
        failOnStatusCode: false,
        
    })

}

function getArray() {
    return cy.request({
        method: 'GET',
        url: 'Users'
        
     
    })
    
}
    


export{allUsers};
export{getArray};