/// <reference types='cypress' />

describe('swap_list', () => {
  it('Deve trocar a visualização da lista', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    // cy.get = vai buscar o elemento
    cy.get('[data-cy=swaplist-filter]').click()
  });

  it('Deve clicar no usuário e ver as principais informações dele', () => {
    cy.get(':nth-child(2) > :nth-child(1) > [data-cy=profileSubmitDetail]').click()
  });
  
  it('Deve voltar para a lista normal', () => {
    cy.get('.sc-bczRLJ').click()
  })
});