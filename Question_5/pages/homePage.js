const { I } = inject();

module.exports = {
  
  fields: {
    search: '#searchbar'
  },

  searchButton: '#submit-form',
  allowCookiesButton: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
  accountMenu: {css: 'a[href="/customer-area"]'},
  loginButton: {css: 'a[href="/login"]'},

  
  sendSearch(product) {
    I.fillField(this.fields.search, product);
  },
  
  clickOnTheSearchButton(){
    I.click(this.searchButton);
  },

  acceptCookies() {
    // I.waitForVisible(this.allowCookiesButton, 10)
    I.click(this.allowCookiesButton);
  },

  imNotLogedIn(){
    I.waitForVisible(this.accountMenu, 10)
    I.moveCursorTo(this.accountMenu)

    I.seeElement(this.loginButton)
  },
}
