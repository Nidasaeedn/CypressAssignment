export class Client {
  //Variables
  //Add Client
  getSaveClientButton = () => cy.get('.col-5 > .v-btn');
  getClientNameTextbox = () => cy.get('input[id=names_1]', { timeout: 15000 });
  getArabicClientNameTextbox = () => cy.get('#names_2');
  getClientNamePlusButton = () => cy.get('#basic-details > .flex > :nth-child(1) > [style="width: 100%;"] > .v-btn', { timeout: 15000 }); //cy.get('#basic-details > .flex > :nth-child(1) > [style="width: 100%;"] > .v-btn');
  getDisplayNameTextBox = () => cy.get('#display');
  getClientTypeList = () => cy.get('[data-cy=type]', { timeout: 15000 });
  getAutosTextbox = () => cy.get('[data-cy=external_17]', { timeout: 15000 });
  getAgencyCheckbox = () => cy.get('#list-item-206-0 > .v-list-item__action > .v-simple-checkbox > .v-icon');
  getClickOutsideClientType = () => cy.get('#basic-details > .flex > :nth-child(3) > .col-span-2 > label');
  getAgency3Div = () => cy.get('#basic-details > .flex > :nth-child(3) > .col-span-2 > label');
  getAgency3Textbox = () => cy.get('[data-cy=external_1]');
  getBrokerTextbox = () => cy.get('#external_4');
  getDeveloper4Textbox = () => cy.get('#external_2');
  getIndividualTextbox = () => cy.get('#external_5');
  getNewAgentTypeTextbox = () => cy.get('[data-cy=external_14]');
  getTeleSalesTextbox = () => cy.get('[data-cy=external_16');
  getTestTypeTextbox = () => cy.get('[data-cy=external_13');
  getIndividualListItem = () => cy.get('#list-item-198-6', { timeout: 15000 });
  getTabComponent = (index) => cy.get('.v-slide-group__content > :nth-child(' + index + ')');
  getTierRankingList = () => cy.get('[data-cy=tier]', { timeout: 15000 });
  getOutsideTierRankingList = () => cy.get(':nth-child(14) > .col-span-2');
  getRatingList = () => cy.get('[data-cy=rating]', { timeout: 15000 });
  getWebsiteTextbox = () => cy.get('#website');
  getLocationList = () => cy.get('[data-cy=location]', { timeout: 15000 });
  getListItemsByClass = () => cy.get('.v-list-item__title');
  getLinkList = () => cy.get('[data-cy=group]', { timeout: 15000 });
  getIsVerifiedCheckbox = () => cy.get('[data-cy=verified]');
  getSourceList = () => cy.get('#source');
  getPfExpiryDate = () => cy.get('[data-cy=pf_expiry]');
  getPfExpiryDateTable = () => cy.get('.v-date-picker-table');
  //Key Contact Person
  getContactPersonName = () => cy.get('#contactName');
  getMobile1Inputbox = () => cy.get('#contactMobile1');
  getMobile2Inputbox = () => cy.get('#contactMobile2');
  getPhone1Inputbox = () => cy.get('#contactPhone1');
  getPhone2Inputbox = () => cy.get('#contactPhone2');
  getEmailInputBox = () => cy.get('#contactEmail');
  getFaxInputBox = () => cy.get('#contactFax');
  getNationalityListItems = () => cy.get('div#list-86 .v-list-item__title');
  getNationalityList = () => cy.get('#contact-person > .flex > :nth-child(2) > .col-span-10 > [dense=""] > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon', { timeout: 16000 });
  getProvinceList = () => cy.get('[data-cy=province]');
  getContactMobile1CodeInputBox = () => cy.get('[data-cy=contactMobile1Code]');
  getContactMobile2CodeInputBox = () => cy.get('[data-cy=contactMobile2Code]');
  getContactPhone1CodeInputBox = () => cy.get('[data-cy=contactPhone1Code]');
  getContactPhone2CodeInputBox = () => cy.get('[data-cy=contactPhone2Code]');

  mockMetadataAPI(environment) {
    cy.intercept(
      {
        method: 'GET',      // Route all GET requests
        url: 'api-v7/clients/metadata',    // that have a URL that matches '/client/metadata'
      },
      { fixture: `network-stubs/${environment}/metadata.json` }
    )
  }
  //Client Location
  getCountryList = () => cy.get('[data-cy=country]', { timeout: 160000 });
  getCrmCityList = () => cy.get('[data-cy=city]', { timeout: 160000 });
  getCRMSectorList = () => cy.get('[data-cy=sector]', { timeout: 160000 });
  getLongitudeTextbox = () => cy.get('#longitude');
  getLatitudeTextbox = () => cy.get('#latitude');
  getAddressTextbox = () => cy.get('#address');
  getExactAddressTextbox = () => cy.get('#exactaddress');
  getZipCodeTextbox = () => cy.get('#zip');

  //Account Managers
  getAccountOwnerList = () => cy.get('[data-cy=owner]', { timeout: 15000 });
  getJuniorAccountManagerList = () => cy.get('[data-cy=junior]', { timeout: 15000 });
  getAssistByList = () => cy.get('[data-cy=assist]', { timeout: 15000 });
  getSaveButton = () => cy.get('.col-5 > .v-btn');
  getMapSelector = () => cy.get('.mapboxgl-canvas');


  //service status
  getAddServiceStatusButton = () => cy.get('#client-service-status > .flex > .grid > .col-span-3 > .v-btn');
  getRedButton = () => cy.get('.mt-4 > .grid > [style="width: 100%;"] > .v-btn > .v-btn__content');
  getPlatformList = () => cy.get(`[data-cy=platform_1]`);
  getServiceStatusList = () => cy.get(`[data-cy=serviceStatuses_1]`);
  getServiceStatusReasonList = () => cy.get(`[data-cy=statusReasons_1]`);
}