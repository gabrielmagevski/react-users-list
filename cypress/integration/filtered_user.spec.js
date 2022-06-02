/// <reference types='cypress' />

describe('filteredUser', () => {
  it('Deve filtrar todos os genêros', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('all')
  });

  it('Deve filtrar um usuario pelo genêro Feminino', () => {
    // cy.visit = vai visitar a página que queremos testar.

    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('female')
  });

  it('Deve filtrar um usuario pelo genêro Masculino', () => {
    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('male')
  });


  it('Deve filtrar um usuario pelo país em que reside', () => {
    cy.wait(2000)
    cy.get('[data-cy=country-filter').select('br')
    cy.wait(2000)
    cy.get('[data-cy=country-filter').select('fr')
    cy.wait(2000)
    cy.get('[data-cy=country-filter').select('us')
    cy.wait(2000)
    cy.get('[data-cy=country-filter').select('nz')
  });
});