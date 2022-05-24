// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --


// import 'cypress-file-upload';
// Cypress.Commands.add("login", () => {

//   cy.get('#username').type(Cypress.env('credentials').username);
//   cy.get('#password').type(Cypress.env('credentials').password);
//   cy.get('.btn').click();
// })
Cypress.Commands.add("validateText", (text) => {
  cy.contains(text).should('be.visible', { force: true });
})

// Cypress.Commands.add("validateTexts", (text) => {
//   for (var i = 0; i < text.length; i++) {
//     cy.contains(text[i]).should('be.visible', { force: true });
//   }

// })

Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject, options) => {
  cy.wrap(subject).click({ force: true })
});

Cypress.Commands.add('forceType', { prevSubject: 'element' }, (subject, text, options) => {
  cy.wrap(subject).type(text, { force: true })
});
// Cypress.Commands.add('visitWithoutFetch', (route) => {
//   cy.visit(route, {
//     onBeforeLoad: (win) => {
//       win.fetch = null
//     }
//   });
// })

// Cypress.Commands.add('getFutureTime', (days) => {

//   const today = new Date()
//   const tomorrow = new Date(today)
//   tomorrow.setDate(tomorrow.getDate() + days)
//   var month = '' + (tomorrow.getMonth() + 1),
//     day = '' + tomorrow.getDate(),
//     year = tomorrow.getFullYear();
//   if (month.length < 2)
//     month = '0' + month;
//   if (day.length < 2)
//     day = '0' + day;
//   return [year, month, day].join('-');
// })

Cypress.Commands.add('getTestData', (path) => {

  cy.fixture(path).then(function (testdata) {
    var returnData = testdata;

    return returnData;

  })
})

// Cypress.Commands.add('visitUrl', (url) => {
//   cy.visit(url, {
//     failOnStatusCode: false,
//     auth: {
//       username: Cypress.env('htaccess') ? Cypress.env('htaccess').username : '',
//       password: Cypress.env('htaccess') ? Cypress.env('htaccess').password : ''

//     }
//   });
// });