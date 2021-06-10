const { I , homePage, resultPage } = inject();


Before(() => {
  I.amOnPage('/');

  // Accept the Cookies dialog
  homePage.acceptCookies();
});

Given('I am non registered user', () => {
  // I am on home page & not loged in into the app
  homePage.imNotLogedIn();
});

When('I search for a product {string}', (product) => {
  homePage.sendSearch(product)
  homePage.clickOnTheSearchButton();
});

Then('Results are listed', () => {
  // homePage.sendSearch(product)
  // homePage.clickOnTheSearchButton();
  resultPage.resultsAreListed
});