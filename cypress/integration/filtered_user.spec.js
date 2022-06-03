/// <reference types='cypress' />

describe('filteredUser', () => {
  it('Must all filter the genres', () => {
    // cy.visit = vai visitar a página que queremos testar.
    cy.visit('http://localhost:3000/')

    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('all')
  });

  it('You must filter a user by the gender Female', () => {
    // cy.visit = vai visitar a página que queremos testar.

    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('female')
  });

  it('You must filter a user by the male gender', () => {
    cy.wait(2000)
    cy.get('[data-cy=gender-filter').select('male')
  });


  it('You must filter a user by the country they live in', () => {
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