/// <reference types='cypress' />

describe('searchUser', () => {
  it('Deve pesquisar um usuario', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    // cy.get = vai buscar o elemento
    cy.get('[data-cy=search').type('a')
  });

  it('Deve clicar no usuário e ver as principais informações dele', () => {
    cy.get(':nth-child(1) > [data-cy=profileSubmit]').click()
  });
  
  it('Deve voltar para a lista normal', () => {
    cy.get('.sc-bczRLJ').click()
  })
});