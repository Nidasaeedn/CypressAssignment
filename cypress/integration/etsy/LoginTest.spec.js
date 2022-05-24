// / <reference types="Cypress" />

import  {HomePage}  from '/cypress/support/pages/homePage.js';
import  {SignInPage} from '/cypress/support/pages/signInPage.js';
import  {RegisterPage} from '/cypress/support/pages/registerPage.js';
import  {GoogleEmailPage} from '/cypress/support/pages/googleEmailPage.js';


describe('Test Suite', function () {
  var homepage,signIn,googleEmail,etsyData=null;
  beforeEach(function () {

    cy.visit('https://www.etsy.com');
    homepage= new HomePage();
    signIn = new SignInPage();
    googleEmail= new GoogleEmailPage();

    cy.getTestData(`testdata/etsyUser`).then(function (testdata) 
    {
      etsyData = testdata;

     });
  })

  it.skip('Q1:successful sign in after creating account', function () {

    homepage.signBtn().click();
    signIn.email().type('abc_def@gmail.com');
    signIn.password().type('123456');
    signIn.signIn().click();

  })
  it.skip('Q2. Create an automate script to test the required fields', function () {

    homepage.signBtn().click();
    signIn.signIn().click();
    cy.validateText(etsyData.emailErrorBlank);
    cy.validateText(etsyData.passwordErrorBlank);

  })  
  it.skip('Q3. Create an account into the site using Gmail option.', function () {

    homepage.signBtn().click();
    signIn.contWithGoogle().click();
    googleEmail.email().type(etsyData.emai2);
    googleEmail.nextBtn().click();


  })
  it.skip('Q4. login into the site with different users using a Data Driven Framework (At least 3) the assertions must validate the successful login..', function () {

    homepage.signBtn().click();
    signIn.email().type(etsyData.email1);
    signIn.password().type(etsyData.password1);
    signIn.signIn().click();
    // signIn.passwordMsg().('Password was incorrect');

    cy.validateText(etsyData.passwordIncorrect);


  })
  it.skip('Q5. Create an automated script to test a failed attempt to login.', function () {

    homepage.signBtn().click();
    signIn.email().type('abc_def@gmail.com');
    signIn.password().type('12346');
    signIn.signIn().click();
    // signIn.passwordMsg().('Password was incorrect');

    cy.validateText('Password was incorrect');


  })
  it('QCreate an automated script to add / edit / delete a product to cart and the assertion must validate the product is in the cart.', function () {

    homepage.signBtn().click();
    signIn.email().type('abc_def@gmail.com');
    signIn.password().type('123456');
    signIn.signIn().click();
    cy.wait(4000);
   cy.validateText('Welcome to Etsy, abc!');
    homepage.wallDecorBtn().click();
   homepage.shopThisItem().click();
  })
})
