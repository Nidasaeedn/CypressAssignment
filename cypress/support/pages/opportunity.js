export class Opportunity {


    getIframe = () => {

        return cy.get('iframe').its('0.contentDocument.body');

    }

    getClientList = () => cy.get('.text-gray-700 > :nth-child(1) > :nth-child(1) > div> .border-gray-300');

    getClientInputBox = () => cy.get('#clientSearch');

    getKeyDecisionMakerList = () => cy.get(':nth-child(2) > div > .bg-gray-100 > .flex');

    getClosingDate = () => cy.get('#closingDate');

    getDayDate = (date) => cy.get(`[data-day="${date}"] > .pika-button`);

    getDraftProposal = () => cy.get('[x-data="draftTabs()"]>');

    getTopPackage = () => cy.get(' ul > li > div > a > svg');

    getCategories = () => cy.get('.sm\:col-span-full');

    getDubizzleCategoryRenewal = () => cy.get('[for="22"]')

    addOpportunityButton = () => cy.get('#save_opportunity_button');

    getCustomPlanButton = () => cy.get('div.sm\\3a col-span-12.md\\3a col-span-12.lg\\3a col-span-4 > button[type="button"]');

    getMonthlyProductsAddMoreProducts = () => cy.get('.border-green-400>#defaultToggleTextAmortized1');

    getOneTimeProductsAddMoreProducts = () => cy.get('.border-green-400>#defaultToggleTextNonAmortized1');

    getListingQuantityInputBox = () => cy.get('#qtyIndividualProductproduct111');

    getListingsCheckbox = () => cy.get('[name=Listings1]');

    getSignatureListingsCheckbox = () => cy.get('#product10551');

    getSignatureListingsInputBox = () => cy.get('#qtyIndividualProductproduct10551');

    getHotListingsCheckbox = () => cy.get('#product121');

    getHotListingsInputBox = () => cy.get('#qtyIndividualProductproduct121');

    getSignatureSaleCheckbox = () => cy.get('#product10561');

    getSignatureSaleInputBox = () => cy.get('#qtyIndividualProductproduct10561');

    getDealOfTheWeekRentCheckbox = () => cy.get('#product401');

    getDealOfTheWeekRentInputBox = () => cy.get('#qtyIndividualProductproduct401');

    getPrintProposalButton = () => cy.get('.mr-12');

    getStartDate = () => cy.get('#start_date');

    getSelectOpportunityStage = () => cy.get('[x-data="stageData()"] > .flex-wrap');

    getNumberOfPayments = () => cy.get('#no_of_payments');

    getPaymentType = () => cy.get('#payment_type');

    getSaveAndContinueButton = () => cy.get('#print_draft_confirmation_btn');

    getFirstOpportunityFromList = (index) => cy.get(`#opp_chart_all >tbody > tr:nth-child(${index}) > td:nth-child(21)>a.task_edit`);

    getBayutProductsAddMoreProducts = () => cy.get('#defaultToggleTextNonAmortized1');

    getBayutCheckbox = () => cy.get('#1-Bayut');

    getDubizzleCheckbox = () => cy.get('[id=2-Dubizzle%20Cars]');

    //Dubizzle Objects

    getDubizzleListingCheckbox = () => cy.get('#product411');

    getMonthlyCreditsCheckbox = () => cy.get('#product421');

    getDealOfTheWeekSaleCheckbox = () => cy.get('#product441');

    getCreditsCheckbox = () => cy.get('#product531');

    getFeature14DaysCheckbox = () => cy.get('#product541');

    getFeature30DaysCheckbox = () => cy.get('#product10581');

    getDubizzleInputBox = () => cy.get(`input[name='bundle_product_qty[]']`);

    typeDubizzleInputBox(index, text) {

        this.getDubizzleInputBox().should('not.have.attr', 'hidden').then(() => {

            this.getDubizzleInputBox().eq(index).clear({ force: true }).forceType(text);


        });

    }
}
