const { I } = inject();
const assert = require('assert');

module.exports = {
  
  fields: {
    search: '#searchbar'
  },

  searchButton: '#submit-form',
  allowCookiesButton: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
  cookiesPopUp: '#CybotCookiebotDialog',
  accountMenu: {xpath: '(//*[contains(text(),"Account")])[1]'},
  loginButton: {css: 'a[href="/login"]'},
  suggestionList: 'div[class="Suggestions_root__Lf3Ip"]',
  suggestionItem: '(//*[contains(@class,"SuggestionItem_link__cBU35")])[1]',
  cleanButton: '(//*[contains(@id,"Path")])[1]',
  
  sendSearch(product) {
    I.fillField(this.fields.search, product);
  },
  
  clickOnTheSearchButton(){
    I.click(this.searchButton);
  },

  acceptCookies() {
    I.waitForVisible(this.allowCookiesButton, 10)
    I.click(this.allowCookiesButton);
    I.waitForInvisible(this.cookiesPopUp)
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

  cleanTheSearchBar(){
    I.waitForVisible(this.cleanButton, 10)
    I.click(this.cleanButton)
  },

  async verifyValueOfSearchBar(expectedValue){
    let actualValue = await I.grabAttributeFrom("#searchbar", "value")
    assert.strictEqual(actualValue, expectedValue)
  },
}
