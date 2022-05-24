
export class HomePage {

  signBtn = () =>  cy.get('nav> .wt-display-flex-xs>:nth-child(1)>.wt-btn')
  wallDecorBtn=()=>cy.get(':nth-child(1) > .wt-text-link-no-underline > .wt-horizontal-center > .wt-position-relative > .query-image');
  shopThisItem=()=>cy.get('.wt-grid__item-xs-7 > .wt-btn');
  addToBasket=()=>cy.get('.add-to-cart-form > div.wt-width-full > .wt-btn');
  removeBtn=()=>cy.get('.wt-pr-xs-1 > a > .wt-btn');


}