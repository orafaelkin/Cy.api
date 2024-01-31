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
     
    }).its('body') // Acessa o array de usuários na resposta
      .then((Id) => {  // Acessa o usuário na posição 1 do array
        const usuario1 = Id[0];
        cy.log(usuario1)
    })
}
    


export{allUsers};
export{getArray};