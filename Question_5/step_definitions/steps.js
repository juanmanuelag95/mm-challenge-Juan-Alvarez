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
});

Then('Click on the Search Button', () => {
  homePage.clickOnTheSearchButton();
});

Then('Results are listed', () => {
  resultPage.resultsAreListed();
});

Then('Results should not be listed', () => {
  resultPage.resultsAreNotListed();
});

Then('Suggestion list should be shown', () => {
  homePage.suggestionListShown();
});

Then('We select an item from the suggestion list', () => {
  homePage.selectItemFromSelectionList();
});