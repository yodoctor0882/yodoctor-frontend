describe('Doctor Login API', () => {

  it('should login successfully', () => {

    cy.request({
      method: 'POST',
      url: 'VITE_API_URL/auth/login', //
      body: {
        identifier: 'mahto@gmail.com',
        password: 'Mahto@123'
      }
    }).then((res) => {

      expect(res.status).to.eq(200);
      expect(res.body.data.token).to.exist;
      expect(res.body.redirect).to.eq('dashboard');

    });

  });

});