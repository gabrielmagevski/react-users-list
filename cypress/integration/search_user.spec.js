/// <reference types='cypress' />

describe('searchUser', () => {
  it('Must search for a user', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    // cy.get = vai buscar o elemento
    cy.get('[data-cy=search').type('a')
    cy.wait(2000)
  });

  it('You must click on the user and see their main information', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > [data-cy=profileSubmit]').click()
  });
  
  it('Must go back to normal list', () => {
    cy.wait(3000)
    cy.get('.sc-bczRLJ').click()
  })
});