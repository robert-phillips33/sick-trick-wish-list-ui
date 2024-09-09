// describe('should load my page', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//   })
// })

describe('page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks',
      { fixture: 'TrickCards.json' }).as('getTricks');
    cy.visit('http://localhost:3000');
  });

  it('should render correct tricks from the load state of my endpoint', () => {
    cy.wait('@getTricks');
    cy.get('.trick-card').should('have.length', 3);
    cy.get('.trick-card').contains('treflip');
    cy.get('.trick-card').contains('heelflip');
    cy.get('.trick-card').contains('frontside 50-50');
  });
});

describe('form inputs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('forms will reflect user input correctly', () => {
    cy.get('form > :nth-child(1)').should('have.value', 'Regular')
  });
});

// (1. -> simulate user interacting with page, 
// 2. -> simulate user submitting the formz, 
// 3. -> assert that the # of forms has changed)
describe('adding new trick and rendering to DOM', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', 
    { fixture: 'TrickCards.json' }).as('getTricks');
    cy.visit('http://localhost:3000');
  });

  it('should render the users new card to the DOM', () => {
    cy.wait('@getTricks');

    cy.get('select').first().select('Switch');
    cy.get('input').first().type('backside heel');
    cy.get('select').last().select('Stairs');

    cy.get('button').contains('SEND IT').click();

    cy.get('.trick-card').should('have.length', 4);
    cy.get('.trick-card').last().contains('backside heel');
  });
});

