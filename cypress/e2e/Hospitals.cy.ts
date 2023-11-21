describe('Hospitals', () => {
  it('Should have correct video status and fetch correct number of hospital image', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/hospitals'}, req => {
      delete req.headers['if-none-match']
    }).as('getHospitals')

    cy.visit('/')

    cy.get('video').should('be.visible')
    cy.get('video').should('have.prop', 'paused', false)

    cy.wait(5000)

    cy.get('button').contains('Pause').should('exist')
    cy.get('button').contains('Pause').click()
    cy.get('video').should('have.prop', 'paused', true)

    cy.get('button').contains('Hospital List').should('exist')
    cy.get('button').contains('Hospital List').click()

    cy.wait(5000)

    cy.get('img').should('have.length.at.least', 3)
  })
})