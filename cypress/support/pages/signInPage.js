
export class SignInPage{
   
        registerBtn=()=>cy.get('[data-heading-section=""] > .wt-display-flex-xs > .wt-btn');
        email=()=>cy.get('#join_neu_email_field');
        emailMsg=()=>cy.get('#aria-join_neu_email_field-error');
        password=()=>cy.get('#join_neu_password_field');
        passwordMsg=()=>cy.get('#aria-join_neu_password_field-error');
        staySignIn=()=>cy.get('#persisent');
        // forgetYourPassword=()=>cy.get('[xpath="//form/div[1]/div/div[6]/div[2]/a"]');
        signIn=()=>cy.get('.wt-validation > .wt-btn');
        // troubleSignIn=()=>cy.get('[xpath="//form/div[1]/div/p/a"]');
        contWithGoogle=()=>cy.get('[data-login-with-google=""] > .wt-btn');
        // contWithFB=()=>cy.get('[xpath="//form/div[3]/div[2]/div/button"]');
        // contWithApple=()=>cy.get('[xpath="//form/div[3]/div[3]/a"]')
      


}
