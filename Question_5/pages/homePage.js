const { I } = inject();

module.exports = {
  
  fields: {
    search: '#searchbar'
  },

  searchButton: '#submit-form',
  allowCookiesButton: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
  accountMenu: {css: 'a[href="/customer-area"]'},
  loginButton: {css: 'a[href="/login"]'},
  suggestionList: 'div[class="Suggestions_root__Lf3Ip"]',
  suggestionItem: '(//*[contains(@class,"SuggestionItem_link__cBU35")])[1]',
  
  sendSearch(product) {
    I.fillField(this.fields.search, product);
  },
  
  clickOnTheSearchButton(){
    I.click(this.searchButton);
  },

  acceptCookies() {
    I.waitForVisible(this.allowCookiesButton, 10)
    I.click(this.allowCookiesButton);
  },

  imNotLogedIn(){
    I.waitForVisible(this.accountMenu, 10)
    I.moveCursorTo(this.accountMenu)

    I.seeElement(this.loginButton)
  },

  suggestionListShown(){
    I.waitForVisible(this.suggestionList, 10)
    I.seeElement(this.suggestionList)
  },

  selectItemFromSelectionList(){
    I.waitForVisible(this.suggestionItem, 10)
    I.click(this.suggestionItem)
  },
}
