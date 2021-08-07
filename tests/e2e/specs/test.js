// https://docs.cypress.io/api/introduction/api.html

// * Sanity Test is useful to check whether our test plugin is properly installed
describe('Sanity Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Listen to Great Music!');
  });
});
