/// <reference types="cypress" />

describe('Registration on Cermati Website', () =>{

    beforeEach(() => {
		cy.viewport(1280,720)
		cy.visit('https://www.cermati.com/app/gabung')
	})

    it('"Daftar Akun"',() => {
        cy.get('#email').type("latifaharum19@gmail.com")
        cy.get('#mobilePhone').type("081328731337")
        cy.get('#password').type("Cobapassword123")
        cy.get('#confirmPassword').type("Cobapassword123")
        cy.get('#firstName').type("Latifah")
        cy.get('#lastName').type("Arum Sari")
        cy.get('#cityAndProvince').type("KULON PROGO")
        cy.contains('KABUPATEN KULON PROGO').click()
        cy.get('.RegistrationForm_form-container__button-text__k6N8W').click()
        cy.get('[data-button-name="send-otp-whatsapp"]').click()
	})

})