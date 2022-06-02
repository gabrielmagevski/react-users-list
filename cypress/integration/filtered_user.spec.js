/// <reference types='cypress' />

describe('filteredUser', () => {
  it('Deve filtrar um usuario pelo genêro Feminino', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    // cy.get = vai buscar o elemento
    cy.get('[data-cy=gender-filter').select('female')
  });

  it('Deve filtrar um usuario pelo genêro Masculino', () => {
    cy.get('[data-cy=gender-filter').select('male')
  });


  it('Deve filtrar um usuario pelo país em que reside', () => {
    cy.get('[data-cy=country-filter').select('br')
    cy.get('[data-cy=country-filter').select('fr')
    cy.get('[data-cy=country-filter').select('us')
    cy.get('[data-cy=country-filter').select('nz')
  });
});