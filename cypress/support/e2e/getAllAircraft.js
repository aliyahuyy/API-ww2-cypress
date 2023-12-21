describe('WW2 API Testing', () => {
    it('get All Aircraft - GET', () => {
        cy.request('api/aircraft/limit/15/order/desc/find/%20').as('getAllAircraft');
        cy.get('@getAllAircraft').then(aircraft => {
            expect(aircraft.status).to.equal(200);
        })
    })
})