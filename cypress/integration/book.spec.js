describe('Book loading', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });
  it('should search for a book successfully', () => {
    cy.intercept('/api/v1/book', { fixture: 'book.json' });
    cy.get('[data-cy=select]').click();
    cy.contains('li', 'Humor').click();
    cy.get('[data-cy=buttonAmazon]').click();
    expect(true).to.be.true;
  });

  it('should fail', () => {
    cy.intercept('/api/v1/book', { statusCode: 500 });
    cy.get('[data-cy=select]').click();
    cy.contains('li', 'Humor').click();
    cy.get('[data-cy=snackbar]').should(
      'have.text',
      'Something went wrong. Try again!',
    );
    expect(true).to.be.true;
  });

  it('should return to first page', () => {
    cy.intercept('/api/v1/book', { fixture: 'book.json' });
    cy.get('[data-cy=select]').click();
    cy.contains('li', 'Humor').click();
    cy.get('[data-cy=returnButton]').click();
    cy.contains('p', 'Matterway Book Selector');
    expect(true).to.be.true;
  });
});
