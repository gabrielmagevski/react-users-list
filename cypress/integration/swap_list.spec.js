/// <reference types='cypress' />

describe('swap_list', () => {
  it('Must change list view', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    // cy.get = vai buscar o elemento
    cy.get('[data-cy=swaplist-filter]').click()
  });

  it('You must click on the user and see their main information', () => {
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(1) > [data-cy=profileSubmitDetail]').click()
  });
  
  it('Must go back to normal list', () => {
    cy.wait(3000)
    cy.get('.sc-bczRLJ').click()
  })
});