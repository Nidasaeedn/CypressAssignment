
export class RegisterPage {

        email =() => cy.get('#join_neu_email_field');
        firstName= () => cy.get('#join_neu_first_name_field');
        password= () => cy.get('#join_neu_password_field');
        registerBtn= () => cy.get('[data-heading-section=""]>.wt-display-flex');
    }
